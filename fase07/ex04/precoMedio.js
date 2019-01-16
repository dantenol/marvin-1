function precoMedio(...args) {
    let avg = 0;
    let max = 0;
    let maxName;
    args.map((e, i) => {
        avg += e.preco;
        if (e.preco > max) {
            max = e.preco;
            maxName = e.nome;
        }
    });
    console.log('O produto mais caro se chama "' + maxName + '"');
    return avg / args[0].length;
}
