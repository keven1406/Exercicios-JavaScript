const array = [1,2,3]
//calcularArray:: -> numero -> novo array
const calcularArray = array => numero => array.map(incremento => incremento + numero)
const somar = calcularArray(array)
console.log(somar(2))
