function ateZero(num) {
    let arr = [];
    if (num > 0) {
        while (num >= 0) {
            arr.push(num--);
        }
        arr.reverse();
    } else {
        while (num <= 0) {
            arr.push(num++);
        }
    }
    return arr
}
