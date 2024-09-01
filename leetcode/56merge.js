arr1=[[1,3],[2,6],[8,10],[15,18]]

var merge = function(array22){

        array22.sort((a,b)=>a[0]-b[0]) //for the starting time

    
    let merge = [array22[0]]
    for(let i= 1 ;i<array22.length ;i++)
    {
        let lastarr = merge[merge.length-1]//for the current pushed array
        let currarr = array22[i]

        // checking for wheather the intervals are smaller 
        if(currarr[0] <= lastarr[1] ){
            lastarr[1]= Math.max(currarr[1],lastarr[1])
        }
        else{
            merge.push(currarr)
        }
    }
    return merge
}

console.log(merge(arr1));
