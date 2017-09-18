function arrayToList(arr1){
  var list;
  for (var i = arr1.length - 1; i >= 0; i--){
    list = {value: arr1[i], rest: list};
  }
  return list;
}

//lista para array

function listToArray(list){
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

console.log(listToArray(arrayToList([10,20])));