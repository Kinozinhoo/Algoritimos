const filme = {
    nome: 'Homem Aranha: Atraves Do Aranha Verso',
    elenco:['Kimiko Glen', 'Hailee Steinfeld', 'Shameik Moore'],
    anoDeLancamento: 2023,
    personagens: ['Peny Parker', 'Miles Morales', 'Gwen Stacy',],
    assisti: true
}
filme.elenco[0] = 'Xuxa'
console.log('O dublador', filme.elenco[0], 'dubla o', filme.personagens[0])
console.log('O dublador', filme.elenco[1], 'dubla o', filme.personagens[1])
console.log('O dublador', filme.elenco[2], 'dubla o', filme.personagens[2])

