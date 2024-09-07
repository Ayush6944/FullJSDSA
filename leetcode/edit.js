function editdistance(word1,word2){
    let m =word1.length
    let n = word2.length 
    let dp = Array.from({length : m+1},()=>Array.from(n+1).fill(0))
    // intizalize base case

    // if word2 is empty 
    for(let i =0;i<=m;i++) dp[i][0]=i;

    // if word1 is empty
    for(let j=0;j<=n;j++) dp[0][j] = j

    for(let i=1 ;i<=m;i++){
        for(let j =1;j<=n;j++){
            if(word1[i-1]===word2[j-1]){
                dp[i][i] = dp[i-1][j-1]
            }else{
                dp[i][j] = Math.min(
                    dp[i-1][j],  //delete
                    dp[i][j-1],         //insert
                    dp[i-1][j-1]   //replace
                ) + 1;
            }
        }
    }

    return dp[m][n]
}

function solveReccursion(s1,s2,i,j,dp){
    let m = s1.length
    let n = s2.length
    if(i==m){
        return n-j
    }
    if(j===n){
        return m-i
    }
    if(dp[i][j] !== -1){
        return dp[i][j]
    }
   
        if(s1[i]===s2[j]){
            dp[i][j]= solveReccursion(s1,s2,i++,j++,dp)
        }
        else{
           dp[i][j]= Math.min(
                solveReccursion(s1,s2,i+1,j,dp),
                solveReccursion(s1,s2,i,j+1,dp),
                solveReccursion(s1,s2,i++,j++,dp)
            )+1;
        }
}