function apenasPalavras(arr) {
    var n = [];
    arr.map((p) => {
        if (typeof p === "string")
            n.push(p);
    });
    return n;
}
