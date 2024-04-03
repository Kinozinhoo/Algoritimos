const numeros =[1, 2, 3, 4, 5 ];
const numeroProcurado = 3;


function encontrar (numeros) {
    return numeros === numeroProcurado;

}

const numerosEncontrados = numeros.filter(encontrar);


console.log(numerosEncontrados);