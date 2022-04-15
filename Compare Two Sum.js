// You are given six numbers, stored in the variables with the following names

// one, two, three, four, five, six

// Find the value ofsum1andsum2, such that

// sum1 = one + two

// sum2 = four + five

// If both the following two conditions are true, printYes, else printNo

// sum1 > three

// sum2 > six

function twoSumsOneNumberII(one, two, three, four, five, six) {
    sum1=one+two;
    sum2=four+five;
    if(sum1>three && sum2>six){
    console.log("Yes");
    }else{
    console.log("No");
    }
    }
    