let str = '0000000000'
let maxcount =0
let count0 =0,count1=0
for(let i=0;i<str.length;i++){
    if(str[i]==='0') count0++;
    else count1++
    if(count0===count1){
        maxcount++
    }
}
if(count0!== count1){
    maxcount=-1
}
// console.log(maxcount);
var a = "Scaler"
var res = a.substr(2,4)
console.log(res);
