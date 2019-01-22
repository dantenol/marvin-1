function xp(n) {
    let level = 0;
    let i = 0;
    while (i < n) {
        i += (level) * 50 + 100;
        level++;
    }
    return level;
}