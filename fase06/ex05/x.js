function x(p) {
    p = p.toLowerCase();
    let x = 0;
    for (var i = 0; i < p.length; i++) {
        if (p[i] === "x") x++;
    }
    return x;
}
