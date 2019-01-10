function passadoOuFuturo(data) {
    if (new Date(data) >= new Date(2015, 10, 21)) return "Futuro";
    else return "Passado";
}
