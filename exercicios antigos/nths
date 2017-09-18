var list = {value: 1,
           rest: {value:2,
           rest: {value: 3,
           rest: null}
           }};
//conversor nth
function nth(list,n){
  console.log(n);
  if (n == 1)
    return list.value;
  if (list.rest == null)
    return "não tem esse valor";
  else
    console.log(list.rest);
    return nth(list = list.rest, n-=1);
}
console.log(nth(list,4));