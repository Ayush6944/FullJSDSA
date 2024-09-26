function zeroSumSubarrays(arr) {
    let prefixSum = 0;
    let prefixSumMap = { 0: 1 };  // To account for subarrays starting from index 0
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      prefixSum += arr[i];
      
      // Check if this prefix sum has been seen before
      if (prefixSumMap[prefixSum] !== undefined) {
        count += prefixSumMap[prefixSum];  // Add the frequency to the count
      }
  
      // Update the frequency of this prefix sum
      prefixSumMap[prefixSum] = (prefixSumMap[prefixSum] || 0) + 1;
    }
  
    return count;
  }
  
  // Example usage
  const arr = [-2,2,0,5,1,-6];
  // console.log(zeroSumSubarrays(arr));  // Output: Number of zero-sum subarrays
  
const findzerosum=(arr)=>{
  let prefixsum = 0 
  let prefixSumMap= {0:1}
  let count = 0 
  for(let i=0;i<arr.length;i++){
    prefixsum += arr[i]

    if(prefixSumMap[prefixsum] !== undefined){
      count += prefixSumMap[prefixsum]
    }
    prefixSumMap[prefixsum] = (prefixSumMap[prefixsum]||0)+1
  }
  return count
}

console.log(findzerosum([-2,2,0,5,1,-6]));
