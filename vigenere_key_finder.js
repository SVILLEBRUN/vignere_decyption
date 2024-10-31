#!/usr/bin/env node

const fs = require('fs');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const keyLengthValue = process.argv[2];
const number_of_files = process.argv[3];

const filePaths = [];

for(let i = 0; i < number_of_files; i++) {
    const filePath = process.argv[4 + i];
    filePaths.push(filePath);
}


// Security check
if(!keyLengthValue || !number_of_files || filePaths.length != number_of_files) {
    console.log('Use the following format: ./vigenere_key_finder.js <keyLength> <number_of_files> <file1> <file2> ...');
    console.log('Put 0 as keyLength if you want to try all the possible key lengths between 1 and 10');
    process.exit(1);
}


// If we dont have the key length we can try to brute force it by trying all the possible key lengths between 1 and 10
let start = 1
let end = 10 
if(keyLengthValue && keyLengthValue > 0) {
    start = keyLengthValue;
    end = keyLengthValue;
}

const keys = [];

// For now we assume that the most common letter in the English language is 'E' and it is the most common letter in the text
for(let keyLength = start; keyLength <= end; keyLength++) {
    const values_per_letter = [];
    for(let filePath of filePaths) {
        const data = fs.readFileSync(filePath, 'utf8');
        let text = data.replace(/[^a-zA-Z]/g, '').toUpperCase().split('');
        
        // We iterate over the key values of each character in the text
    
        for(let i = 0; i < text.length; i++) {
            const char = text[i];
            const char_group = i % keyLength;
    
            if (!values_per_letter[char_group]) {
                values_per_letter[char_group] = {};
            }
            if (!values_per_letter[char_group][char]) {
                values_per_letter[char_group][char] = 0;
            }
            values_per_letter[char_group][char]++;
        }
    };
    
    // We select the most common letter in each group
    let cypher_key = '';
    for (let i = 0; i < keyLength; i++) {
        const maxEntry = Object.entries(values_per_letter[i]).reduce((a, b) => a[1] > b[1] ? a : b)
        const most_common_letter = maxEntry[0];
    
        // For the key we want the difference between the most common letter and 'E'
        let key = (alphabet.indexOf(most_common_letter) - alphabet.indexOf('E') + 26) % 26;    
        cypher_key += alphabet[key];
    }
    keys.push(cypher_key);
};

console.log(keys);

process.exit(0);

