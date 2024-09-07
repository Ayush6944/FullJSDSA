let words = ["This", "is", "an", "example", "of", "text", "justification."]
let maxWidth = 16

let res =[]
let curr = []
let numofletter = 0

for(let word of words){
    if(word.length + curr.length + numofletter >maxWidth){
        for(let i =0 ;i<maxWidth-numofletter;i++){
            curr[i%(curr.length-1)||1] +=' ';  //to fill spaces
        }

        res.push(curr.join(''))
        curr = []
        numofletter = 0
    }
        curr.push(word);
        numofletter +=word.length;

    }
    let lastline = curr.join(' ');
    while(lastline.length < maxWidth){
        lastline+=' ';
    }
    res.push(lastline)

console.log(res);

