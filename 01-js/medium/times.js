/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const d1 = new Date();
    let startTime = d1.getTime();
    let sum = 0;
    while (n > 0){
        sum = sum + n;
        n = n - 1;
    }
    const d2 = new Date();
    let endTime = d2.getTime();
    let timeTaken = (endTime - startTime) / 1000;
    return timeTaken;
}

console.log(calculateTime(100000000000));
