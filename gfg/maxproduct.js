// Maximum Product Subarray
let arr =[2, 3, 4, 5, -1, 0]

let maxproduct = arr[0]
let minproduct = arr[0]
let result = 0

for(let i=1;i<arr.length;i++){
    if(arr[i]===0){
        maxproduct = 0
        minproduct = 0
        result = Math.max(result , 0)
        continue
    }

    let temp = maxproduct
    maxproduct = Math.max(arr[i],maxproduct*arr[i],minproduct*arr[i]
    minproduct  = Math.min(arr[i],temp*)
    )

}