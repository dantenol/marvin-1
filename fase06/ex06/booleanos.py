def booleano(arr):
    newArr = []
    for i in arr:
        if not isinstance(i, bool):
            newArr.append(i)
    return(newArr)
