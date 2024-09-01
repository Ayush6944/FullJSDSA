let n = 8
let m = 5
let arr =[3, 4, 1, 9, 56, 7, 9, 12]
    //code here
    // let str,end =0
    arr.sort((a,b)=>a-b)
    let min = Infinity
    for(let i = 0; i<n-m ; i++){
        let diff= arr[i+m-1] - arr[i]
        min = Math.min(min,diff)
        }
        console.log(min);

