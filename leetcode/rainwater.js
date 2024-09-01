function traprain(arr){
    let l=lmax=water=rmax = 0 
    let r = arr.length
    while(l<r){
        if(arr[r]>=arr[l]){
            if(lmax>arr[l]){
                    water+=lmax - arr[l]
            }
            else{
                lmax =arr[l]
            }l++
        }
        else{
            if(rmax>arr[r]){
                water+=rmax - arr[r]
            }
            else{
                rmax= arr[r]
            }
        r--        }
    }
    return water
}

console.log(traprain([0,1,0,2,1,0,1,3,2,1,2,1]));
