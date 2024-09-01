num = [3,1,5,4,7,5]
for(let i= 0 ;i<num.length-1;i++){
    let ind = Math.abs(num[i])

    if(num[ind]<0){
        // console.log(ind);
        break
         
    }
    num[ind] = -num[ind]
    // console.log(num);
    
}

// using set 

const arr = new Set()
nums= [3,1,5,4,17,15,4]
for(let num of nums){
    if(arr.has(num)){
        console.log(num);
        break
    }
    arr.add(num)
}

console.log(typeof(nums));
