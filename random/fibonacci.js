function recursiveFibonacci(n){
    if(n <= 1)
        return n;
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(3))

function fibonacciSeries(n){
    const fib = [0, 1];

    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacciSeries(10));