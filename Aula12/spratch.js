const Usuario ={
    nome: 'Prof',
    idade: 25,
    email: 'prof@senacrs.com.br',
    cidade: 'São Paulo',
}

const novoUsuario = {
    ...Usuario,
    nome: 'João',
    idade: 28
}
console.log (novoUsuario)