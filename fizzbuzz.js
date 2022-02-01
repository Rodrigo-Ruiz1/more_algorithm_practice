//Given a number as an input, print out every integer from 1 to n. If an integer is divisible by 2, print out 'Fizz'. If an integer is divisible by 3, print out 'Buzz'. If an integer is divisible by both 2 and 3, print out 'Fizz Buzz'.

const fizzbuzz = (num) => {
    for (i = 1; i < num; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('Fizz Buzz');
        } else if (i % 2 === 0) {
            console.log('Fizz');
        } else if (i % 3 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(9)