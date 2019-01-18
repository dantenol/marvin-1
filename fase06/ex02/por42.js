function por42(min, max) {
    var multps =[];
    while (min <= max) {
        if (min % 42 === 0)
            multps.push(min);
        min++;
    }
    if (multps[1])
        return multps[1];
    console.log("Não encontrado");
    return false;
}
