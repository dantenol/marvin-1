function booleano(arr) {
    var n = [];
    arr.map((e) => {
        if (typeof e !== "boolean")
            n.push(e);
    });
    return n;
}
