function organizarDatas(arr) {
    arr.sort(function(a,b) {
        return new Date(a.dataDeChegada) < new Date(b.dataDeChegada) ? -1 : 1;
    });
    return arr;
}
