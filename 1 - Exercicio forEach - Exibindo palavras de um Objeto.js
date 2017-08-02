var conversas = [{fala: ["oi", "Adeus"]},
      {fala: ["Bom dia", "Boa tarde", "Boa noite"]},
      {fala: ["Gostoso", "Gostosa", "Amargo", "Doce"]}];
var count = 0;
conversas.forEach(function (entrada) {
  entrada.fala.forEach(function (dialogos) {
    if (count < 3)
      console.log(dialogos);
    count++;
  });
});