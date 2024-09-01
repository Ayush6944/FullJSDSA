let arr= [1, 4, 3, 6, 2, 1]
let high =3
let low =1

// for(let )
let mid = 0
let start = 0
let end = arr.length -1 


while(mid<=end){
    if(arr[mid]<low){
        // swap them
        [arr[start],arr[mid]]=[arr[mid],arr[start]]
        start++
        mid++
    }
    else if (arr[mid]>high){
        [arr[mid],arr[end]]=[arr[end],arr[mid]]
        end--
    }
    else{
        mid++
    }
}
console.log(arr);
