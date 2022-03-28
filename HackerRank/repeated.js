
// function repeatedString(s, n) {
//     let fracNumber = Math.trunc(n / s.length);
//     let reminder = n % s.length;
//     let counter = 0;

//     for (let index = 0; index < s.length; index++) {
//         if (s[index] === 'a') {
//             counter++;
//         }
//     }
//     counter = counter * fracNumber;
//     for (let index = 0; index < reminder; index++) {
//         if (s[index] === 'a') {
//             counter++;
//         }
//     }
//     return counter;
// }

function checking(s,n){
    let scount=0;
    let remainder=n%s.length;
    console.log("remainder is" + remainder)
    let frac= Math.trunc(n/s.length);
    console.log(frac)
    for(let i=0;i<s.length;i++){
        if(s[i]==='a'){
            scount++;
        }
    }
    console.log("count" + scount)
        scount=scount*frac;
        console.log("after" + scount)
        for(let i=0;i<remainder;i++){
            if(s[i]=='a'){
                scount++;
            }
        }
    
    return scount;
}

console.log(checking("aba",10))