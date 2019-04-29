def fibonacci(n):
    arr = [1, 1]
    if n < 3:
        return 1
    else:
        while len(arr) < n:
            arr.append(arr[-2] + arr[-1])
        return arr[-1]
