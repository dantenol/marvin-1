def ateZero(nbr):
    arr = []
    if nbr > 0:
        while nbr >= 0:
            arr.append(nbr)
            nbr -=1
    else:
        while nbr <= 0:
            arr.append(nbr)
            nbr += 1
    return arr
