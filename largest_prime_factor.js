function largestPrimeFactor(number) {
    var primeFactor = 0, i, num = number;
    for (i = 2; i <= num; i++) {
        if (num % i === 0) {
            primeFactor = i;
            num = num / i;
            console.log(num);
        }
    }
    return "The largest prime factor of " + number + " is: " + primeFactor;
}
console.log(largestPrimeFactor(600851475143));
