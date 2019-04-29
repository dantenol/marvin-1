def somaPares(mn, mx):
    import math
    mn = math.ceil(mn)
    mx = math.floor(mx)
    su = 0
    while mn <= mx:
        if mn % 2 == 0:
            su += mn
        mn += 1
    return su