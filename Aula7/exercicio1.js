const readline = require('readline')

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual a sua idade broh?????', (idade) => {
    console.log('sua idade é', idade);

    rl.close();
});