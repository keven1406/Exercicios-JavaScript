//	casouCom:: string -> string -> 'string' -> concatenacao das strings
const casouCom = PrimeiroNome => casou => segundoNome => PrimeiroNome + casou + segundoNome
const quem = casouCom('Jessica')
console.log(quem(' casou com ')('Elias'))
