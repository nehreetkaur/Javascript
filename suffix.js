// st is used with numbers ending in 1 (e.g. 1st, pronounced first)
// nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
// rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
// As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
// th is used for all other numbers (e.g. 9th, pronounced ninth).


function checking(num){
    let j= num%10;
    console.log(23%10) // to get or drop the last digit of number; from 23 we get 3;
    let k=num%100;
    console.log(252%100) // to get the last two digits if num is in 123etc we get 23

    if(j===1 && k!==11){
        return num + "st";
    }
    if(j===2 && k!==12){
        return num +"nd";
    }
    if(j===3 && k!==13){
        return num + "rd"
    }

    return num + "th"
}

console.log(checking(23))
