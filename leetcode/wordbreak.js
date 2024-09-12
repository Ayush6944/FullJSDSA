let s = "leetcode"
let worddict = ['apple','pen']

//remove duplicacy from worddict

let dict = new Set(worddict)

// intialize a arr with bool to indicate s[0;1]
let res = new Array(s.length+1).fill(false)

//base case because 
res[0] = true
 
//looping for str[j:i]
for(let i=1 ; i<= s.length ;i++){
    for(let j=0;j<i;j++){
        if(res[j] && dict.has(s.substring(j,i))){
            res[i] = true
            break; //no more for check for j
        }
    }
}

console.log(res[s.length]);
