/*Usei o metodo forEach por que estou estudando atualmente ele e isso é um
exercicio para pratica-lo.*/

var zologico = [{animais: ["Elefante", "Leão", "Gato"]},
               {animais: ["Tigre", "Elefante", "Macaco"]},
               {animais: ["Crocodilo", "Leão", "Dente de sabre"]},
               {animais: ["Tartaruga", "Leão", "Camundongo"]}
               ];
var quantidade = [];
zologico.forEach(function (locais) {
   locais.animais.forEach(function (bichos) {  
     quantidade.forEach(function (numero) {
         var igualdade = 0;
         quantidade.forEach(function (revendo) {
            if (bichos in revendo.animal)
               igualdade = 1;
         })
         //Esquema para colocar o objeto em quantidade só depois da verificação e se não tiver nada.
         if (igualdade == 0) {
            quantidade.push({ animal:bichos, quantia: 0});
         } 
         if (bichos == numero.animal)
            numero.quantia = numero.quantia + 1;
     });
   });
});
quantidade.forEach(function (local) {
   console.log(local.animal, local.quantia);
});

