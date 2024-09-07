let x = 'ayushayush'
let  a= x.split('').sort().join('')

for(let i = 0;i<a.length;i++){
    let count = 1
    while(i<a.length && a[i]===a[i+1]){
        count++
        i++
    }
    if(count>1){
        console.log(`${a[i]} count - ${count}`);
    }
}