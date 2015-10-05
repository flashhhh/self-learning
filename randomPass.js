'use strict';
function generate(symbols, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const symbolIndex = Math.floor(Math.random() * symbols.length);
        password += symbols[symbolIndex];
    }
    return password;
}

console.log(generate('abcdsrRGHK12345', 5));
