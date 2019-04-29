def ateZero(nbr):
    arr = []
    if nbr > 0:
        i = 0
        while i <= nbr:
            arr.append(i)
            i +=1
    else:
        while nbr <= 0:
            arr.append(nbr)
            nbr += 1
    return arr
