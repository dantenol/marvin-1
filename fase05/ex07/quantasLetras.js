function quantasLetras(arr) {
    var n = 0;
    arr.map((p) => {
        n += p.length;
    });
    return n;
}
