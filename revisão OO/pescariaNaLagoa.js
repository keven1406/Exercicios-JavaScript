var lagoa = {}

lagoa.peixes = {}
lagoa.peixes.especies = [
                         { nome: 'Cavalinha', quantidade: 100},
                         { nome: 'Salmão', quantidade: 100},
                         { nome: 'Sardinha', quantidade: 100}
                        ]

lagoa.agua = {}
lagoa.agua.quantidadeEmBalde = 100
lagoa.agua.poluicao = 20

console.log(lagoa.agua)
console.log(lagoa.peixes)
console.log(lagoa)


//---- pescar ------

var pescador = {}
pescador.vara = true
pescador.pescar = function () {
  if (this.vara === true) {
    let quantidade = lagoa.peixes.especies[0].quantidade
    quantidade = quantidade - (quantidade - 1)
    lagoa.peixes.especies[0].quantidade--
    return quantidade
    
    }
  else
    return 'Você vai pescar com a mão????'
}
console.log(
  "O pescador pescou: ",
  
  (function (contador) { 
    function pescando(numeroDePeixes) {
      console.log(numeroDePeixes)
      return numeroDePeixes > 0 ? pescando(numeroDePeixes - pescador.pescar()) : numeroDePeixes
    }
    return pescando(contador)
   }(lagoa.peixes.especies[0].quantidade)),
  
  'Restou: ',
  lagoa.peixes.especies[0].quantidade
)

//--------- Pescador pescou todos os peixes -----------