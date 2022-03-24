// 0 0 1 0 0 1 0 ==>array is equal to 7


function checking(c){
    let count=0;
    for(let i=0;i<c.length-1;i++){
        if(c[i+2]===0){
            i++
        }
        count++
    }
    return count;
}
        console.log(checking([0,0,0,0,1,0]))
    
// different approach;
// function check(c){
//     let count=[]
//     for(let i=0;i<c.length;i++){
        
//         if(c[i]===1){
//             count.push[c[i]]
//         }
//     }
// return count;
// }

//console.log(check([0,0,0,1,1,1]))


let num=[0,0,0,1,1];
let move=[];
for(let i=0;i<num.length;i++){
    if(num[i] ===0){
        console.log("i is " + i + "value is"+  num[i])
        move.push(num[i])
    }

}
console.log(move)
