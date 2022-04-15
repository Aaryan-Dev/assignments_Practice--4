// You are given five numbers, stored in the variables with the following names

// one, two, three, four, five

// Find the value ofsum1andsum2, such that

// sum1 = one + two 

// sum2 = three + four

function twoSumsOneNumberII(one, two, three, four, five) {
    sum1=one+two;
    sum2=three+four;
    if(sum1>five || sum2>five){
    console.log("Yes");
    }else{
    console.log("No");
    }
    }