var protoCaneta = {
  tampa: true,
  acaoTampa: function () {
    console.log((function() {
      return (this.tampa) ? (function() {
        this.tampa = false
        return 'Destampou'
      }()) : (function() {
          this.tampa = true
          return 'Tampou'
      }())
    })
  ())},
  tubo: 'transparente',
}
//------------- CANETA BIKE ------------------

var canetaBike = Object.create(protoCaneta)

canetaBike.cor = 'Vermelho'
canetaBike.acaoTampa()

canetaBike.usar = function () {
  if (this.tampa === 'true')
    return 'riscou ~'
  else
    return 'Abra a tampa primeiro otario'
  //return (this.tampa === true) ? (function (){ return "Riscou ~"}()) : "Abra a tampa primeiro!!! ¬¬'"
}

console.log(canetaBike)
console.log('usando mano' , canetaBike.usar(), '-', canetaBike.tampa)

//Notei que quando chamamos uma acao que modifica o prototype herdado, ele continua, apos a modificação com o
//mesmo valor. Como no caso de canetaBike.usar() que modifica o this.tampa do prototype, mas o this ainda continua
//com o valor inicial. Espero rever a solução disso logo!