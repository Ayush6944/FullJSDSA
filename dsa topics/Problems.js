// Ques-1 find second largest element in array


// const largest = arr.sort((a,b)=>a-b)

// console.log(largest[(arr.length-2)],largest);
// console.log(arr.shift());


// const arr = [ 165,65,2,84,64,9]
// // 2nd question

// // rotate array with k length

// const rotatearray=(arr,k)=>{
// if(k>arr.length) return 0
// for(let i=0;i<k+1;i++){
//     let first = arr[0]
//     arr.shift();
//     arr.push(first); 
// }
// console.log(arr);
// }

// // rotatearray([1,5,8,9,3,41],7)

// const rotate=(arr,k)=>{

//     if(k>arr.length) return

//     arr.unshift(...arr.splice(arr.length-k+1))

// console.log(arr,'hjj');

// }
// rotate([1,5,8,9,3,41],3)

// // console.log([1,5,8,9,3,41].slice(3))


// array = [ 123,651,1651,165,65,65,666,97,54]

// array.splice(2,5)

// console.log(array);

// 3rd questions
// remove duplicate element from array

// const arr= [101,101,28,8,2,3,2,68,101,8]

// using set
// console.log(... new Set(arr));

// using filter method
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
// console.log(removeDuplicates(arr));

const dublicatefileter=(arr)=>{
const arr1=arr.filter((item,index)=>arr.indexOf(item)===index)
    console.log(arr1);
}
// dublicatefileter(arr)

// second algo assume one other array in which make a loop and check if that element is included in that array 
// if not then push that element


// question no.3 find the largest subarray sum
const arr=[-2,-5,5,8,-5,8,74, -99,26]

function largsubarr(arr){
    let maxsum=arr[0]   //assume the first array element to be maxsum
    // let ar=[]    //initialize empty array 
    let startindex =0  //first index
    let endindex =0  // endindex 
    for(let i=0;i<arr.length;i++){
        let currsum=0    
        for(let j=i;j<arr.length;j++){
            currsum+=arr[j]
            if(currsum>maxsum){
               maxsum = currsum
            //    ar.push(arr[j])
               startindex=i
               endindex=j
            }
        }
    }
    // console.log(maxsum,arr.slice(startindex,endindex+1));
}
largsubarr([-2,10,9,3,56,-8,7,-4] )

// the above can be solved but it take a lots of time so not widely used

// the optimized solution of this question is to use Kandane algorithum

// assume a array [-2,10,9,3,56,-8,7,-4] 

// algo 1.take 2 varaibles sum=-2 and maxsum=0
//      2.check sum+=element 
//      3.sum>maxsum "?" maxsum = sum
//      4.sum<0 :sum=0

function optimizedsum(arr){
    let sum = arr[0]
    let maxsum = 0
    for(let i=0 ;i<arr.length;i++){
        sum+=arr[i]
        if(sum>maxsum){
            maxsum= sum
        }
        if(sum<0) {
            sum = 0
        }
    }
    console.log(maxsum);

}
optimizedsum([-2,10,9,3,56,-8,7,-4] )


// again practise

function subarr(arr){
    let sum = arr[0]
    let str =0 
    let end =0 
    for(let i =0;i<arr.length ; i++){
        let currsum = 0 
        for(let j=i;j<arr.length;j++){
            currsum+=arr[j]
            if(currsum>sum){
                sum = currsum
                str= i
                end= j
            }
        }
    }
    console.log(arr.slice(str,end));
    
}

// subarr(arr)

// most optimized way for this is kadane algo

