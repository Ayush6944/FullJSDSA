// declaration - 2 method 1.using keyword new Array(elements)  2. directly

const arr = new Array(1,2,3,4)

const arr1 = [1,2,65,85,6,54]
 
// length property to know about the length

const length = arr1.length

// to add a element use push , for deleting use pop

arr.push(54,5,68)
arr.pop()

// we can use to add unshift and to delete shift but position will be on first index
// arr.unshift(500)
arr.shift()
arr.shift()  //to remove first element
// console.log(arr);

const arru = [123,561,4,5]

arru.forEach(i=>console.log(i))


