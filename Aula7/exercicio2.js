const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question('Digite o primeiro número: ', (numero1) =>{
        rl.question('Digite o segundo número ', (numero2) =>{
            const resultado = Number(numero1) + Number(numero2);
            console.log(`A soma de ${numero1} e  ${numero2} é ${resultado}`);
            rl.close();
        })
    })