function PalacioReal(nomeDoRei, nomeDoReino, industria) {
  this.rei = nomeDoRei
  this.reino = nomeDoReino
  this.industria = industria
  this.tecnologia = function () {
    let nivelEconomia = this.industria
		if(nivelEconomia >= 50 && nivelEconomia < 100)
			return 5
		else if (nivelEconomia >= 0 && nivelEconomia < 50)
			return 0
		else
			return 10
	} 
}
var palacioRealOriental = new PalacioReal('Ricardo II', 'Alemanha', 100)
var palacioRealOcidental = new PalacioReal('Jorge V', 'Grã-Bretanha', 90)
console.log(palacioRealOriental.rei, palacioRealOriental.reino, palacioRealOriental.industria, palacioRealOriental.tecnologia())
console.log(palacioRealOcidental.rei, palacioRealOcidental.reino, palacioRealOcidental.industria, palacioRealOcidental.tecnologia())

function thisIsSparta() {
	if (palacioRealOriental.tecnologia() > palacioRealOcidental.tecnologia())
		return palacioRealOriental.reino + ' ganhou a guerra'
	else
		return palacioRealOcidental.reino + ' ganhou a guerra'
}
console.log(thisIsSparta())