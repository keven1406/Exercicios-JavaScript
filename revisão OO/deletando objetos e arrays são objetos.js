var anObject = {left: 1, right: undefined};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);
//---------------
console.log(typeof([1,2]));