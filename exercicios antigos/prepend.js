var list = {value: 1,
           rest: {value:2,
           rest: {value: 3,
           rest: null}
           }};
//nova lista;
function prepend(list, arg){
  return list = {value: arg, rest: list};
}
console.log(prepend(list,2));