const readline = require('readline')
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

    function verificanumero(num){
    if ( num%2===0  ) {
    console.log (`seu numero ${num} é: Par`);
    } else {
        console.log (`seu numero ${num} é: Impar`)
    }
}
    


    rl.question('Digite um numero:', (num) => {
         verificanumero(num);

         rl.close();
    });