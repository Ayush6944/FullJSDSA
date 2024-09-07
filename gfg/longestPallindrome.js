let S = 'aabaa'
// console.log(s.slice(2,4));

let substr = new Set()
let max = ''
for(let i =0;i<S.length;i++){
    let j =i
    let cur='' 
    while(j<S.length){
        let pall = true
        cur = substr.add(S.slice(i,j+1))
        if(cur.length>1){
            let f = 0
            let e = cur[cur.length -1]
            while(f<e){
                if(cur[f]===cur[e]){
                    f++
                    e--
                }
                else{
                    pall = false
                }
            }
            if(max.length<cur.length && pall ){
                max = cur
            }
        }
        j++
    }
}
// let ans = new Set(substr)
console.log(max);
