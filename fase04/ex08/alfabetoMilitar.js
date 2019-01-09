function alfabetoMilitar(char) {
    char = char.toLowerCase();
    switch (char) {
        case ("a"):
            return "alpha";
        case ("e"):
            return "echo";
        case ("i"):
            return "india";
        case ("o"):
            return "oscar";
        case ("u"):
            return "uniform";
        default:
            return false;
    }
}
