const array = ['Elias', 'Beti', 'Ana', 'Nina Cão']
console.log('O maior nome é: ', array.reduce((min, cur) => {
	if (min.length < cur.length) return min
	else return cur
}))
