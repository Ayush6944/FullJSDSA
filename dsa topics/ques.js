let num = 210000
let rev = 0 

while(num>0){
    let digit = num %10
    rev= rev*10+digit
    num= Math.floor(num/10)
}
// console.log(rev);
//  largest no. in array

let arr;

arr = [35,-570,45,-5,500,5,-47,5,5]
// console.log(Math.max(...arr));

// largest subarray in array

const subarray = (arr)=>{
let maxsum = arr[0]
// let ar=[]
let strindex = 0
let endindex = 0
for(let i=0 ; i<arr.length;i++){
    let currentsum = 0
    for(let j=i;j<arr.length ;j++){
        currentsum+=arr[j]
        if(currentsum>maxsum){
            maxsum = currentsum
            // ar.push(arr[j])
            strindex = i
            endindex = j 
        }
    }
}
console.log(maxsum , arr.slice(strindex,endindex+1));

}
subarray(arr)
let d=10
++d
// console.log(d);




// prime number series
let prime = []
for(let i =1 ;i < 100;i++){
    // for(let j =i;)
    if(prime%i==0){
        prime.push(i)
    }

}
// console.log(prime);

// print first n prime number

function isprime(n){
    if(n<=1) return false
    if(n<=3) return true
    if(n%2==0 || n%3 ==0 ) return false

    for( let i = 5 ; i*i<=n ;i+=6){
        if(n % i ===0 || n%(i+2)===0) return false
    }
    return true

}

function primeno(n){

    let count = 0
    let num = 2  

    while(count < n){
        if(isprime(num)){
            console.log(num);
            count++
            
        }
        num++
    }

}

// primeno(20) 

// middle of linkedlist

// nagaram words
// s = aman t =nama
 
function anagram(s,t){
    if(s.length !== t.length) return false

    return s.split('').sort().join('')===t.split('').sort().join('')
}

// console.log(anagram('ama20n1','nama121'));


// string exchanging 
str='abaabbcc'
chr= [...str]
// s=s.replaceAll('a','b').replaceAll('b','a')

// s=s.replaceAll('b','a')
for(let i=0;i<chr.length;i++){
    if(chr[i]=='a'){
        chr[i]='b'
        
    }
    else if(chr[i]==='b'){
        chr[i]='a'
        
    }
    // console.log(chr)
}
// console.log(chr.join(''));

// palindrome abba

function pallindrome(s){
    let r = s.split('').reverse().join('')
    
    if(r===s) return true

    return false
}
// optimized code

function optimmizedpallindrome(s){
    let left = 0
    let right = s.length - 1 
    while(left<right){
            if(s.charAt(left)!== s.charAt(right)){
                return false
            }
            left++
            right--
    } 
    return true
}



// console.log(optimmizedpallindrome('abua'));

array=[64,654,64,1,5,50,850,11]

newarray = array.sort((x,y)=>y-x)
console.log(newarray);

 

function checkprime(n){
    if(n%4 ===0 || n%100 ===0 || n%400 ===0 ){
        return false
    }
    return true
}
console.log(checkprime(48));
