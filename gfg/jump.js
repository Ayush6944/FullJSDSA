function jump(arr){
    if(arr.length <= 1) return 0
    
    let fartest = 0
    let current = 0
    let jump = 0
     
    for(let  i=0 ;i<arr.length-1;i++){
        
        fartest = Math.max(fartest, i + arr[i])

        if(i === current){
            jump++
            current = fartest
        }
        if(current>=arr.length){
            break
        }
    }
    return jump
}

console.log(jump([1,1,1,1,3]));
