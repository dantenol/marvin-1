def capitaliza(palavra):
    return palavra[:3].upper() + palavra[3 - len(palavra):]
