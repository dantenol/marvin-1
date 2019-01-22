function diaDaSemana(data) {
    const dates = data.match(/(\d\d)\/(\d\d)\/(\d\d\d\d)/);
    const dayOfWeek = new Date(dates[3], dates[2] - 1, dates[1]).getDay();
    switch (dayOfWeek) {
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
    }
}
