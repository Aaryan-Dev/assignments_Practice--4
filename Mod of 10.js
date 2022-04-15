// You are given a number stored in a variable with the namenum

// Find the value ofx, such that

// x = num % 10

// Print the answer according to the following conditions

// If 

// x = 0, print `zero`

// x = 1, print 'one'

// x = 2, print 'two'

// x = 3, print 'three'

// x = 4, print 'four'

// x = 5, print 'five'

// x = 6, print 'six'

// x = 7, print 'seven'

// x = 8, print 'eight'

// x = 9, print 'nine'

function modeof10(num) {
    x= num%10;
    if(x === 0){
    console.log(`zero`);
    }else if(x == 1){
    console.log('one');         
    }else if(x == 2){
    console.log('two');
    }else if(x == 3){
    console.log('three');
    }else if(x == 4){
    console.log('four');
    }else if(x == 5){
    console.log('five');
    }else if(x == 6){
    console.log('six');
    }else if(x == 7){
    console.log('seven');
    }else if(x == 8){
    console.log('eight');
    }else{
    console.log('nine');
    }
    }