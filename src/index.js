const { getRandomWordSync, getRandomWord } = require('word-maker');

var fs = require('fs')

// ----- Step 1 -----

var step1 = fs.createWriteStream('step1.txt', {
    flags: 'a'
})

const stepOne = () => {
    for (var i = 1; i<=100; i++) {
        try{
            step1.write(i+': '+ getRandomWordSync({withErrors: true}) +'\n');
        }
        catch {
            step1.write("It shouldn't break anything!\n");
        }
    }
    step1.end();
}

stepOne();

// ----- Step 2 -----

var step2 = fs.createWriteStream('step2.txt', {
    flags: 'a'
})

const stepTwo = () => {
    for (var i = 1; i<=100; i++) {
        if (i % 3 === 0 && i % 5 !== 0)
            step2.write(i+': Fizz\n');
        else if (i % 5 === 0 && i % 3 !== 0)
            step2.write(i+': Buzz\n');
        else if (i % 3 === 0 && i % 5 === 0)
            step2.write(i+': FizzBuzz\n');
        else {
            try {
                step2.write(i+': '+ getRandomWordSync({withErrors: true}) +'\n');
            }
            catch {
                step2.write("It shouldn't break anything!\n");
            }
        }
    }
    step2.end();
}

stepTwo();

//----- Step 3 Part 1 -----

var stepThreePartOne = fs.createWriteStream('stepThreePartOne.txt', {
    flags: 'a'
})

const stepThreePartA = async () => {
    for (var i = 1; i<=100; i++) {
        try {
            stepThreePartOne.write(i+': '+ await getRandomWord({withErrors: true}) +'\n');
        }
        catch {
            stepThreePartOne.write("It shouldn't break anything!\n");
        }
    }
    stepThreePartOne.end();
}

stepThreePartA();

//----- Step 3 Part 2 -----

var stepThreePartTwo = fs.createWriteStream('stepThreePartTwo.txt', {
  flags: 'a'
})

const stepThreePartB = async () => {
    for (var i = 1; i<=100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            stepThreePartTwo.write(i+': Fizz\n');
        }
        else if (i % 5 === 0 && i % 3 !== 0) {
            stepThreePartTwo.write(i+': Buzz\n');
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            stepThreePartTwo.write(i+': FizzBuzz\n');
        }
        else {
            try {
                stepThreePartTwo.write(i+': '+ await getRandomWord({slow: true}) +'\n');
            }
            catch {
                stepThreePartTwo.write("It shouldn't break anything!\n")
            }
        }
    }
    stepThreePartTwo.end();
}

stepThreePartB();
