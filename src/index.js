const { getRandomWordSync, getRandomWord } = require('word-maker');

// console.log('--- Step 1 ---');

// const stepOne = () => {
//     for (var i = 1; i<=100; i++) {
//         console.log(i+':', getRandomWordSync());
//     }
// }

// stepOne();

// console.log('');
// console.log('--- Step 2 ---');

// const stepTwo = () => {
//     for (var i = 1; i<=100; i++) {
//         if (i % 3 === 0 && i % 5 !== 0)
//             console.log(i+': Fizz');
//         else if (i % 5 === 0 && i % 3 !== 0)
//             console.log(i+': Buzz');
//         else if (i % 3 === 0 && i % 5 === 0)
//             console.log(i+': FizzBuzz')
//         else
//             console.log(i+':', getRandomWordSync());
//     }
// }

// stepTwo();

// console.log('');
// console.log('--- Step 3 Part 1 ---');

// const stepThreePartA = async () => {
//     for (var i = 1; i<=100; i++) {
//         console.log(i+':',await getRandomWord());
//     }
// }

// stepThreePartA();

console.log('');
console.log('--- Step 3 Part 2 ---');

const stepThreePartB = async () => {
    for (var i = 1; i<=100; i++) {
        if (i % 3 === 0 && i % 5 !== 0)
            console.log(i+': Fizz');
        else if (i % 5 === 0 && i % 3 !== 0)
            console.log(i+': Buzz');
        else if (i % 3 === 0 && i % 5 === 0)
            console.log(i+': FizzBuzz')
        else
            console.log(i+':',await getRandomWord());
    }
}

stepThreePartB();

var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('Hello Seattle\n');
});
app.listen(8080);
console.log('Listening on port 8080...');

// YOUR CODE HERE