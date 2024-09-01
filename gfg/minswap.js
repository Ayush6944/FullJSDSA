let arr = [2, 7, 9, 5, 8, 7, 4]
let  k =5 //output - 2

let count = 0
// caluculation of window size 
for(let i =0 ;i<arr.length;i++){
    if(arr[i]<=k){
        count++
    }
}
// caluclate the unfavourable elements for first window size count
let bad = 0
for(let i =0;i<count;i++){
    if(arr[i]>k){
        bad++
    }
}

let minswap = bad  //assume worst case for minimal result

for(let i=0,j=count;j<arr.length;i++,j++){
    //if any elements go out of window then its bad status should be updates
    if(arr[i]>k) bad-- //we only check for the bad conditon
    // when our window slide the new elementcome we have to check for favaourable / bad
    if(arr[j]>k) bad++

    minswap = Math.min(minswap , bad)
}
console.log(minswap);
