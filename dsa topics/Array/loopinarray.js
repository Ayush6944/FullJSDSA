// basic loops - for and while

const arr = [5,69,656,8,365,952,1000]

// for(let i = 0 ; i <arr.length; i++){
//     // console.log(arr[i])
// }


// let i=0
// while (i<arr.length) {
//    console.log(arr[i]);
//    i++ 
// }


//inbuilt loops in js map , map return a completly new array with condtion
// .map((value,index,array)=>return the wanted condition)
// let a =2 
// const arr2 = arr.map((i,index,arr2)=>
//     {
//          return i+100+index
//     }
//     )

// filter also returns a new array but require a new condition

// const arr3 = arr.filter((i)=>
// i%100 == 0 
// )
// console.log(arr3);

// foreach loop changes values  in existing loops
// arr.forEach((i)=>{
//     i+=10
//     console.log(i+10);
// })


// REDUCE function .reduce(prev,item)
const arrn=[5,4,5854,5,58]
let n=1
const arr4 = arr.reduce((i,j)=>{
   return i+j;
});


console.log(arr4)


// console.log(arr2);
// .some or .every used to return a boolean answer for the given conditions  arr.some((i)=>i/2)