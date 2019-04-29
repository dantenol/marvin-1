def por42(mn, mx):
    mn += 42
    while mn <= mx:
        if mn % 42 == 0:
            return mn
        else:
            mn += 1
    print("Não encontrado")
    return False
