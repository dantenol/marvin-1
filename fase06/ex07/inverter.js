function inverter(p) {
    if (Array.isArray(p)) {
        return p.reverse();
    } else {
        let s = "";
        for (let i = p.length - 1; i >= 0; i--) {
            s += p[i];
        }
        return s;
    }
}
