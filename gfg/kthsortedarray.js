let arr1 = [1,5,7,98,6,3]
let arr2 = [14,2,3,5,8,0]

let arr = [...arr1,...arr2]

arr.sort((a,b)=>a-b)
console.log(arr);
