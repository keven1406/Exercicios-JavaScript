//funcao que cria uma nova funcao
const greaterThan = n => {return m => m > n }
const greaterThan10 = greaterThan(10)
console.log(greaterThan10(11))

//funcao que altera outra funcao
const noisy = f => arg => {
	console.log('calling with', arg)
	const val = f(arg)
	console.log('called with', arg, '- got', val)
	return val
}
noisy(Boolean)(0)

//Alterando funcoes com outras funcoes 

const nome = alterar => nome => alterar(nome)
const alterar = palavra => console.log(palavra + ' Seu nome foi alterado')
nome(alterar)('Elias')

//Outro exemplo

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const somarArray = funcaoSomar => array => filtrarNumeroPar => {
	const novoArray = array.map(item => funcaoSomar(item))
	return filtrarNumeroPar(novoArray)
}
const funcaoSomar = numero => numero + 1
const filtrarNumeroPar = novoArr => novoArr.filter(item => item % 2 === 1)
const mostrarNaTela = somarArray(funcaoSomar)(array)(filtrarNumeroPar)
console.log(mostrarNaTela)

