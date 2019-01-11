function removerPosicao(arr, i) {
    const start = arr.slice(0, i - 1);
    const finish = arr.slice(i);
    return start.concat(finish);
}
