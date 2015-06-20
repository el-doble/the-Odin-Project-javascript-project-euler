function evenFibSum(number) {
    var fibs = [1, 2], evenFibs = 2, i = 2;
    while (fibs[fibs.length - 1] <= number) {
        fibs[i] = fibs[i - 1] + fibs[i - 2];
        if (fibs[i] % 2 === 0) {
            evenFibs += fibs[i];
        }
        i++;
    }

    return "the sum of the even fibonacci numbers from 1 to " + number + " is: " + evenFibs;
}
console.log(evenFibSum(4000000));
