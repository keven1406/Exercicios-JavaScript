var list = {value: 1,
           rest: {value:2,
           rest: {value: 3,
           rest: null}
           }};
//conversor nth
function nth(list,n){
  if (!list)
    return "não tem esse valor";
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n-1);
}
console.log(nth(list,2));