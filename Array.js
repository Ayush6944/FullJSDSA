// Array declaration
const arr1=["ff",1,'f22f',21]
const arr2= new Array('aa','bb',1,5)


// methods or manipulation techniques protoype techniques
// 1.length ,pop,shift , unshift  ,push includes() , indexof() ,join ,split ,etc

// Splice()  vs   Slice()

// console.log(arr1.slice(1,3));
// console.log(arr1.splice(1,3));

// console.log(arr1,arr2)

// concate- it will merge two array into a new array

let arr3= arr1.concat(arr2)
// console.log(arr3);

// other way of using concat is spread operator [...arr]

const arr4 = [...arr1,...arr2]
console.log(arr4);
