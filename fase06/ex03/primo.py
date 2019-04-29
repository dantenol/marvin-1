def primo(n):
    if n < 2:
        return "Não"
    i = 2
    while i < n:
        if n % i == 0:
            return "Não"
        i += 1
    return "Sim"
