function booleano(arr) {
    arr.map((e, i) => {
        if (typeof e === "boolean")
            arr.splice(i, 1);
    });
    return arr;
}
