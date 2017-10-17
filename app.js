const table = 'JDIECHÄAURVBSKLTOMGPFÖNRY';
const indexes = '12345';


function bifidEncrypt(word) {
    if (word === undefined || word === '') {
        return '';
    }
    let row = '';
    let col = '';
    let tempRow = '';
    let encrypted = '';

    word = word.toUpperCase();

    // first find the row and column for given letters
    for (let i = 0; i < word.length; i++) {
        let idx = table.indexOf(word.charAt(i));
        row += indexes.charAt(idx / 5);
        col += indexes.charAt(idx % 5);
    }

    // combine the row and col
    tempRow = row + col;

    // find letters for the combined rows
    for (let i = 0; i < tempRow.length; i += 2) {
        encrypted += table.charAt((parseInt(tempRow.charAt(i)) - 1) *
            5 + parseInt(tempRow.charAt(i + 1) - 1));
    }

    // return encrypted word
    return encrypted;
}

function bifidDecrypt(word) {
    let crow = '';
    let row = '';
    let col = '';
    let decrypted = '';

    word = word.toUpperCase();

    // find numbers from the table
    for (let i = 0; i < word.length; i++) {
        let idx = table.indexOf(word.charAt(i));
        crow += indexes.charAt(idx / 5) + indexes.charAt(idx % 5);
    }

    // create row and col from numbers
    row = crow.substr(0, crow.length / 2);
    col = crow.substr(crow.length / 2);

    // find chars from table
    for (let i = 0; i < row.length; i++) {
        decrypted += table.charAt((parseInt(row.charAt(i)) - 1) *
            5 + parseInt(col.charAt(i) - 1));
    }

    // return decrypted word
    return decrypted;
}

// single run bencmark function
function executionTime(func, word) {
    let start;
    let end;

    if (func === '-tenc') {
        start = process.hrtime();
        bifidEncrypt(word);
        end = process.hrtime(start);
    } else {
        start = process.hrtime();
        bifidDecrypt(word);
        end = process.hrtime(start);
    }
    return end[1] / 1000000;
}

function benchmark(func, word) {
    let start;
    let end;
    let btimes = [];

    if (func === '-benc') {
        for (let i = 0; i < 100; i++) {
            start = process.hrtime();
            bifidEncrypt(word);
            end = process.hrtime(start);
            btimes.push(end[1] / 1000000);
        }
    } else {
        for (let i = 0; i < 100; i++) {
            start = process.hrtime();
            bifidDecrypt(word);
            end = process.hrtime(start);
            btimes.push(end[1] / 1000000);
        }
    }

    return btimes.reduce(function (sum, a) {
        return sum + a
    }, 0) / (btimes.length || 1);
}

module.exports = {
    benchmark,
    executionTime,
    bifidDecrypt,
    bifidEncrypt
}