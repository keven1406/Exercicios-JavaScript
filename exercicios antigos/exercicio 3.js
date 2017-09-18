function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}
function listToArray(list){
  var array = [];
  for(var node = list;node; node = node.rest)
    array.push(node.value);
  return array;
}
console.log(listToArray(arrayToList([10,20,30])));

function listaarray(lista){
  var array = [];
  for (var node = lista; node; node = node.rest)
   array.push(node.value);
  return array;
}
console.log(listaarray(arrayToList([20,30])));
function prepend (array,list){
  
}