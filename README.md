# (bifid_cipher) Bifid Cipher

Made for RD Velho SW Developer Challenge 2018.

Bifid cipher is a cipher which combines the Polybius square with transposition, and uses fractionation to achieve diffusion. 

Requirements: 
 * [Node.js](https://nodejs.org/en/)

Installation
 * git clone https://github.com/CasparWaara/bifid_cipher
 * to run tests -> npm install

Usage: node index.js [options]

 * -e <word>    : Encrypts word
 * -d <word>    : Decrypts word
 * -tenc <word> : Benchmark encryption in single run
 * -tdec <word> : Benchmark decryption in single run
 * -benc <word> : Benchmark average encryption in 100 runs
 * -bdec <word> : Benchmark average decryption in 100 runs

To run tests:
* npm run test
