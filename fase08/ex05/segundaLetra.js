function segundaLetra(arr) {
    arr.sort((x, y) => {
        if (x[1].toLowerCase() > y[1].toLowerCase())
            return 1;
        else
            return -1;
    });
    return arr;
}
