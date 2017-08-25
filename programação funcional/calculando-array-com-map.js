const array = [1,2,3]
const calcularArray = array => numero => array.map(incremento => incremento + numero)
const somar = calcularArray(array)
console.log(somar(2))
