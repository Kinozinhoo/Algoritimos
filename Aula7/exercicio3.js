const readline = require('readline')

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite sua idade:', (idade) => {
    if (idade >= 18){
        console.log("voce é maior de idade")
    } else {
        console.log ('voce é menor de idade')
    }

    rl.close();
});