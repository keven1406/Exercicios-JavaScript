var mangas = [];

//Adicionando mangás a lista.

function addEntry(name,vol){
  return mangas.push({titulo: name, volume: vol});
}

//Vendo a lista.

function see(list){
  for (var events in list)
    console.log(list[events]);
}

//Mangas duplicatas.

function duplicata(list){
  var index = 0;
  for (var elements in list){
    for (var events in list){
      if ((list[events].titulo && list[events].volume) == 
           (list[elements].titulo && list[elements].volume))
        index++;
    }
  }
  return index;
}

addEntry("One Piece", 1);
addEntry("One Piece", 1);
addEntry("One Piece", 3);
addEntry("Terra Formers", 1);

see(mangas);

console.log(duplicata(mangas));
