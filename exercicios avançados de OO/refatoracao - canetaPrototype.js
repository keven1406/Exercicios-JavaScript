function ProtoCaneta (acao) {
  this.tampa = true
  this.acaoDaTampa = function () {
    return (function() {
      return (this.tampa) ? (function() {
        this.tampa = false
        console.log('TAMPAAAA: ', this.tampa, 'Deveria ser outr coisa', this.prototype)
        return 'Destampou'
      }()) : (function() {
          this.tampa = true
          return 'Tampou'
      }())
    })
  ()}
  this.tubo = 'transparente'
}

var canetaBike = new ProtoCaneta()
canetaBike.acaoDaTampa()

canetaBike.usar = function () {
  if (this.tampa === 'true')
    return 'Riscou ~'
  else
    return 'Abra a tampa primeiro otario'
  //return (this.tampa === true) ? (function (){ return "Riscou ~"}()) : "Abra a tampa primeiro!!! ¬¬'"
}
canetaBike.nome = 'biquinha'
console.log(canetaBike.usar(), canetaBike)
