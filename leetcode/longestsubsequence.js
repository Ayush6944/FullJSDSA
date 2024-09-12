let strs = ['fleow','fleower','fleame']
//we are not taking the prefix and match with all string

//base case will be 
if(strs.length == 0) console.log();
 ''
let prefix = strs[0]

for(let i =1 ;i<strs.length;i++){
    while(strs[i].indexOf(prefix) !== 0){
        prefix = prefix.slice(0,prefix.length - 1)
    }
    if(prefix === 0 ) console.log('');
    
}
console.log(prefix);
