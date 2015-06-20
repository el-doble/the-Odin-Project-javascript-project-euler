function sumOfMultiples(number) {
    var sum = 0, i;
    for (i = 0; i <= number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return "the sum of all the multiples of 3 or 5 below " + number + " is: " + sum;
}

console.log(sumOfMultiples(1000));