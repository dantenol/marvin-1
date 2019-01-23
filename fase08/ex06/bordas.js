function printar(s, c, m, f) {
    let st = c;
    let i = 2;
    while (i++ < s)
        st += m;
    if (i - 1 === s)
        st += f;
    return st + '\n';
}

function bordas(h, v) {
    let txt = "";
    let y = 0;
    while (y < v){
        if (y === 0)
            txt += printar(h, "A", "B", "C");
        else if (y === v - 1)
            txt += printar(h, "C", "B", "A");
        else
            txt += printar(h, "B", "0", "B");
        y++;
    }
    console.log(txt.slice(0, -1));
}
