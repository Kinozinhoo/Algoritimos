function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//Oque vai ser impresso no console?: vai aparecer o resultado das contas

//O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?: nada

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
   //  i.   `Eu gosto de cenoura  ` eu gosto de cenoura
     //ii.  `CENOURA é bom pra vista` cenoura é bom pra vista
     ///ii. `Cenouras crescem na terra` cenouras crescem na terra

//a. Explique o que essa função faz e qual é sua utilidade? vai transformar o texto em minusculo

//

