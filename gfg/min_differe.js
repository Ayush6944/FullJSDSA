// Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and
//  tallest towers after you have modified each tower.


// ALGO USED


function min(arr,k,n){

// sort the array
arr.sort((a,b)=>a-b);

// find current difference b/w largest and smallest
let diff = arr[n-1] - arr[0]

// find the curr largest and smallest
let largest = arr[n-1]-k  // largest possible height after operations
let smallest = arr[0]+k
// find the maximum height and min height
for(let i=0;i<n-1;i++){
    let max = Math.max(largest,arr[i]+k)
    let min = Math.min(smallest,arr[i]-k)

    if(min<0) continue

    diff = Math.min(diff, max-min)
}
return diff
// now compare between both the differences

}

console.log(min([1,5,8,10],2,4));
