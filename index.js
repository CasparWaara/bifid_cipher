// example usage of library
const app = require('./app');
const argv = process.argv.slice(2);


// check what we are doing and give help message if needed
if (argv[0] === '-e' && argv[1] !== undefined) {
    console.log(app.bifidEncrypt(argv[1]));
} else if (argv[0] === '-d' && argv[1] !== undefined) {
    console.log(app.bifidDecrypt(argv[1]));
} else if ((argv[0] === '-tenc' || argv[0] === '-tdec') && argv[1] !== undefined) {
    console.log(app.executionTime(argv[0], argv[1]) + 'ms');
} else if ((argv[0] === '-benc' || argv[0] === '-bdec') && argv[1] !== undefined) {
    console.log(app.benchmark(argv[0], argv[1]) + 'ms');
} else {
    console.log('Usage: node index.js [options]\n' +
        '-e <word>    : Encrypts word\n' +
        '-d <word>    : Decrypts word\n' +
        '-tenc <word> : Benchmark encryption in single run\n' +
        '-tdec <word> : Benchmark decryption in single run\n' +
        '-benc <word> : Benchmark average encryption in 100 runs\n' +
        '-bdec <word> : Benchmark average decryption in 100 runs');
}