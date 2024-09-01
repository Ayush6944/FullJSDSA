let original = [1,2,3,4]
// let res = []
let m = 1
let n =2
if(m===1 && n===1) return []
    let res = []
    res.push(original.slice(m))
    res.push(original.slice(n))

    console.log(res);
    