#!/usr/bin/env node

const fs = require('fs');

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const filePath = process.argv[2];
const key = process.argv[3];

// Security check
if(!filePath || !key) {
    console.log('Use the following format: ./vigenere_decryption.js <file> <key>');
    process.exit(1);
}

const data = fs.readFileSync(filePath, 'utf8');
let text = data.replace(/[^a-zA-Z]/g, '').toUpperCase().split('');

let decrypted_text = '';
for(let i = 0; i < text.length; i++) {
    const char = text[i];
    const key_char = key[i % key.length];

    const key_index = alphabet.indexOf(key_char);
    const char_index = alphabet.indexOf(char);
    const new_index = (char_index - key_index + 26) % 26;

    decrypted_text += alphabet[new_index];
}

console.log(decrypted_text);

process.exit(0);