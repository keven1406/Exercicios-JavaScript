//App Séculos em algarismos romanos.
//02/14/2017
//Autor: Elias Keven
function converterParaReal(year){
  I = 1
  V = 5
  x = 10
}
function converter(year){
  if (typeof(year) == String)
    return converterParaReal(year);
  else if (typeof(year) == Number)
    return converterParaRomano(year);
}
console.log(1500);