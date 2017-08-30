const personagens = [
	{nome: 'Elias'},
	{nome: 'Julia'},
	{nome: 'Ana'},
	{nome: 'Sheila'}
] 
	//acao::  -> string persnagem -> novo array
const acao = fala => personagem => personagem.map(obj => { 
	if (obj.nome === 'Elias')
		obj.falas = fala 
		return obj
}) 
const falar = acao('Olá, sou um cara legal')
console.log(falar(personagens))
   