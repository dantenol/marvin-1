function primo(n) {
    var p = n - 1;
    if (n === 0 || n === 1)
        return "Não";
    while (p > 1) {
        if (n % p === 0)
            return "Não";
        p--;
    }
    return "Sim";
}
