/*Laço de repetição para Objetos. Diferente dos Arrays, esse laço funciona nos 
objetos de forma mais especifica. Precisando apenas criar uma variável event
e adicionar o operador "in" direcionado a um objeto. Ele irá percorrer todo o objeto*/

/*No objeto a baixo vemos um "map". O map é uma meneira de juntar dois valores
que se correspondem. Por exemplo: comeu 3 coisas. Comeu e 3 são valores que se correspondem
e podem ser adicionados juntos como um map.*/

var obj = {"comeu": 3,
          "bebeu":2};
for (var event in obj)
  console.log("Ele "+event+" "+obj[event]);
