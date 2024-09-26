// this question states that there are some cows which are in anger and 
//  have to place at a minimum distance from their plots 

// idea 1.ispossible function which will check for possible position
//  2.aggresvie question 


function ispossible(stall,n,cows,minDis){
    let count =-1
    let lastcowpos = stall[0]
    for(let i=1;i<n;i++){
        if(stall[i] -lastcowpos >=minDis){
            count++
            lastcowpos=stall[i]
        }
        if(count>=cows) return true;
    }
    return false;
}
// main fuction
function aggresiveCows(stalls,cows){
    //sort the  stalls
    stalls.sort((a,b)=>a-b)
    const n = stalls.length

    // using binary searching
    let low= 1;
    let high = stalls[n-1] - stalls[0]
    let res = -1;

    while(low<=high){
        let mid = Math.floor((low+high)/2)
   
    if(ispossible(stalls,n,cows,mid)){
        result = mid;
        low = mid +1;
    }else{
        high = mid -1;
    }
} return result
 }