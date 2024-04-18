
    const pessoa = {
        nome: 'liuji',
        Idade: 16,
        generomusical: 'Lofi',   
    }



function PessoaNova(objeto){
    const again = {...objeto,
        comidas: ['Pizza', 'sushi', 'Hmaburguer'],
        best: {
          nome:  'Marcelo',
          Idade:15   
    }
}
console.log('O nome da pessoa é',pessoa.nome,'e suas comidas favoritas são',again.comidas[0], again.comidas[1],'e'again.comidas[2], 'e seu melhor amigo se chama:',best.nome, 'e tem:'again.best.Idade, 'anos.')
}
PessoaNova(pessoa)

