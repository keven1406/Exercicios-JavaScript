var list = {value: 1,
           rest: {value:2,
           rest: {value:3,
           rest:4}}};
var node2;
function nth(list){
  if (list.value == list.rest.value){
    console.log("eu");
    return list;
  }
  else
   return  console.log("não é" + list.rest[2]);
}
nth(list);