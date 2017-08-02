/*function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
logEach([1,2,3]);*/

function forEach(array, action) {
  for (var i = 0; i < array.length; i++) 
    action(array[i]);
}
/*forEach(["wampeter", "Forma", "Granfallon"], console.log);*/
var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);
