let paisdeOrigem = 'Brasil'
if (paisdeOrigem === "Brasil"){
    console.log('brasileiro')
} else if (paisdeOrigem === 'EUA'){
    console.log('norte americano')
} else if (paisdeOrigem === 'ingraterra'){
    console.log('ingles')
} else {
    console.log ('nacionalidade nao encontrada')
}

let paisdeOrigem2 = 'Brasil'
switch (paisdeOrigem2) {
    case 'brasil':
        console.log('brasileiro')
        break
        case 'eua':
        console.log('norte americano')
        break
        case 'inglaterra':
        console.log('inglês')
        break
        case 'frança':
        console.log('francês')
        break
}