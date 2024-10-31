# Krypton CTF Project

This project aims to solve the Krypton Capture The Flag (CTF) challenge from OverTheWire, focusing on the Vigenère cipher. The Vigenère cipher is a method of encrypting alphabetic text using a simple form of polyalphabetic substitution.

# Overview

The project includes two main components: 

- **Key Finder**: A tool to determine the encryption key used in Vigenère cipher texts.
- **Decryption Tool**: A utility to decrypt messages given the correct key.

## Key Finder : vigenere_key_finder.js

This script helps you identify the key used to encrypt messages through statistical analysis. It focuses on the frequency of letters in the encrypted text, particularly the letter 'E', which is the most common letter in English.

### How to Use

1. **Input Requirements**: 
   - Provide a sufficiently long example of encrypted English text that was encrypted using the same key, or even better multiple texts.
2. **Key Size Options**:
   - **Known Key Size**: If you know the size of the key, input that size, and the algorithm will return the corresponding key.
   - **Unknown Key Size**: If you do not know the key size, the algorithm will generate the best guesses for keys of varying lengths (1 - 10). You can then test these keys to see which one successfully decrypts the message.
3. **Command Line Usage**:
    ```bash
    ./vigenere_key_finder.js <keyLength> <number_of_files> <file1> <file2> ...'
    ```


## Decryption Tool : vigenere_decryption.js

This script decrypts encrypted messages given the correct key. Simply provide the encrypted text and the key, and it will output the decrypted message.

**CommandLine Usage**
    ```bash
    ./vigenere_key_finder.js <keyLength> <number_of_files> <file1> <file2> ...
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
