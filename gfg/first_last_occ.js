let  arr = [ 1, 3, 5, 5, 5, 5, 67, 123, 125 ]

let first =0
let last = 0
let  i=0;j=arr.length-1
while(i<arr.length ){
    if(arr[i]===5){
        first = i
    }
    if(arr[j]===5){
        last = j
    }
i++
j--
}
console.log(first,last);
