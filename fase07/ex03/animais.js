function animais(objs) {
    objs.map((e, i) => {
        delete e.altura;
        e.idade = i + 5;
    });
    return objs;
}
