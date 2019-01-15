function primo(n) {
    var p = n - 1;
    while (p > 1) {
        if (n % p === 0)
            return "Sim";
        p--;
    }
    return "Não";
}
