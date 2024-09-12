//har marked most easy approach

let s = 'abababa'
let n = s.length
let lps = new Array(n).fill(0)
let maxlen = 0
let i = 1
while(i<n){
    if(s[i] === s[maxlen]){
        maxlen++
        lps[i]= maxlen
        i++
    }
    else{
        if(maxlen!==0){
            maxlen = lps[maxlen-1] //previous element that is prefix and suffix
        }
        else{
            lps[i]=0
            i++
        }
    }
}
console.log(s.substring(0,lps[n-1]));
