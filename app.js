const table = 'JDIECHÄAURVBSKLTOMGPFÖNÅY';
const indexes = '12345';


function bifidEncrypt(word) {
    if (!okWord(word)) {
        // should have some explanatory error messages
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
    if (!okWord(word)) {
        // should have some explanatory error messages
        return '';
    }
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

// single run benchmark function
function executionTime(func, word) {
    let start;
    let end;
    // we don't check if the word parameter is valid.
    // Someone might want to benchmark invalid function calls
    // to en/decrypt. 
    if (func === '-tenc') {
        start = process.hrtime();
        bifidEncrypt(word);
        end = process.hrtime(start);
    } else if (func === '-tdec') {
        start = process.hrtime();
        bifidDecrypt(word);
        end = process.hrtime(start);
    } else {
        return '';
    }
    console.log('Executed in : ', (end[0] * 1000) + end[1] / 1000000 + 'ms');
    return (end[0] * 1000) + end[1] / 1000000;
}

// benchmark doesn't use the executionTime function as the specs
// stated that executionTime function should output the time to console...
// in benchmark, we don't want that as it slows down the en/decrypt function
function benchmark(func, word) {
    let start;
    let end;
    let btimes = [];

    if (func === '-benc') {
        for (let i = 0; i < 100; i++) {
            start = process.hrtime();
            bifidEncrypt(word);
            end = process.hrtime(start);
            btimes.push((end[0] * 1000) + end[1] / 1000000);
        }
    } else if (func === '-bdec') {
        for (let i = 0; i < 100; i++) {
            start = process.hrtime();
            bifidDecrypt(word);
            end = process.hrtime(start);
            btimes.push((end[0] * 1000) + end[1] / 1000000);
        }
    } else {
        return '';
    }

    return btimes.reduce(function (sum, a) {
        return sum + a
    }, 0) / (btimes.length || 1);
}

// Basic checks of the input
function okWord(word) {
    if (word === undefined || word === '') {
        return false;
    }
    if ((/[^JDIECHÄAURVBSKLTOMGPFÖNÅY]/i.test(word))) {
        return false;
    }
    return true;
}

module.exports = {
    benchmark,
    executionTime,
    bifidDecrypt,
    bifidEncrypt
}