def primo(n):
    if n < 2:
        return "Nao"
    i = 2
    while i < n:
        if n % i == 0:
            return "Nao"
        i += 1
    return "Sim"
