function somaPares(n1, n2) {
    let a = Math.ceil(n1);
    let b = Math.floor(n2);
    let sum = 0;
    while (a <= b) {
        if (a % 2 === 0)
            sum += a;
        a++;
    }
    return sum;
}
