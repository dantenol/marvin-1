def primo(n):
    if n < 2:
        return "N�o"
    i = 2
    while i < n:
        if n % i == 0:
            return "N�o"
        i += 1
    return "Sim"
