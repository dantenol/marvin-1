function fibonacci(n) {
    let fib = [];
    if (n === 1) fib = [1];
    else {
        fib = [1, 1];
        let i = 2;
        while (i < n)
            fib.push(fib[i - 1] + fib[i++ - 2]);
    }
    return fib;
}
