let  prices = [7,1,5,3,6,4]
    let buy = prices[0] //7
    let sell = 0
    let profit = 0 
    for(let i = 1 ;i<prices.length ;i++){
        if(prices[i]>buy){
            sell = prices[i]
        }
        profit = Math.max(profit , sell-buy);

        buy = prices[i]
        // console.log(profit,`buy - ${buy} sell - ${sell}`)
    }
    // console.log(prices.length);
    

    // let arra = Array.from({length : n},()=>Array.from({length : 2}))
    let dp = Array.from({ length: 3 }, () => 
        Array.from({ length: 2 }, () => 
          Array.from({ length: 3 }, () => -2)
        )
      );


    console.log(dp);
    