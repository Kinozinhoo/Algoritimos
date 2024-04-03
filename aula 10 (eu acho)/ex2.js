const readlineSync = require('readline-sync');

const email = readlineSync.question('Qual o seu email?')
const usuario = readlineSync.question('Qual o seu usuario?')


console.log ('O email ' + email ,'foi cadastrado com sucesso. Seja bem-vinda(o), ' + usuario )