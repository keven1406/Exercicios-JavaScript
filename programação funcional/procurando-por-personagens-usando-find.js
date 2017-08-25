//personagem -> acao -> falar
const personagens = [
	{nome: 'Elias'},
	{nome: 'Nina'},
	{nome: 'Ana'},
	{nome: 'Sheila'}
] 

const procurarNaLista = listaDeNomes => nome => 
	listaDeNomes.find(nomeAtual => nomeAtual.nome === nome)
const procurarPorPersonagem = procurarNaLista(personagens)
console.log(procurarPorPersonagem('Sheila'))


// ------------- 






