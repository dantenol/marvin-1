function por42(min, max) {
    while (min <= max) {
        if (min % 84 === 0)
            return min;
        min++;
    }
    console.log("N�o encontrado");
    return false;
}
