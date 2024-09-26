//brute force technique
let Petrol = [4, 6, 9, 4]
let cost  = [6, 5 ,3, 5]

for(let i = 0;i<Petrol.length;i++){
    if(Petrol[i]<cost[i]){
        continue
    }
    let j = (i+1)%Petrol.length
    let currPetrol = Petrol[i] - cost[i] + Petrol[j]
    while(j!==i){
        if(currPetrol<cost[j]){
            break
        }
        let lagaan = cost[i]
        j=(j+1)%Petrol.length
        let kamai  = Petrol[j]

        currPetrol = currPetrol - lagaan + kamai

    }
    if(j===i){
        console.log(i);
        break
        
    }
    else{
        console.log("hamse na ho payega");
        
    }

}