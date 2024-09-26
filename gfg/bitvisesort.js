// toString(2) for binary 
let arr = [5, 2, 3, 9, 4, 6, 7, 15, 32];
function sortbit(arr){
    let res= []
    arr.forEach(i=> {
       res.push(i.toString(2)) 
    });

    res.sort((a, b) => {
        b.split('1').length - 1  - a.split('1').length - 1;
    });
    const numberArray = res.map(binaryStr => parseInt(binaryStr, 2));
    console.log(numberArray);   
}
sortbit(arr)
// [ 15, 7, 5, 6, 9, 3, 2, 4, 32 ]