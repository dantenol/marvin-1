function printarInicio(s) {
    let st = "A";
    let i = 2;
    if (s === 1)
        st += '\n';
    while (i++ < s)
        st += "B";
    if (i - 1 === s)
        st += "C\n";
    return st;
}

function printarFinal(s) {
    let st = "C";
    let i = 2;
    if (s === 1)
        st += '\n';
    while (i++ < s)
        st += "B";
    if (i - 1 === s)
        st += "A\n";
    return st;
}

function printarMeio(s) {
    let st = "B";
    let i = 2;
    if (s === 1)
        st += '\n';
    while (i++ < s)
        st += "\u00A0";
    if (i - 1 === s)
        st += "B\n";
    return st;
}

function bordas(h, v) {
    let txt = "";
    let y = 0;
    while (y < v){
        if (y === 0)
            txt += printarInicio(h);
        else if (y === v - 1)
            txt += printarFinal(h);
        else
            txt += printarMeio(h);
        y++;
    }
    console.log(txt);
}
