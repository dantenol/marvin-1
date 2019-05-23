function precoMedio(...args) {
    const txt = JSON.stringify(args);
    let vals = txt.match(/\"preco\":([\d|.]+)/g);
    vals = vals.join();
    vals = vals.match(/[\d|.]+/g);
    const avg = vals.reduce((a, b) => Number(a) + Number(b), 0) / args.length;
    const max = args.sort((a, b) => a.preco > b.preco ? -1 : 1);
    console.log(`O produto mais caro se chama "${max[0].nome}"`);
    return avg;
}
