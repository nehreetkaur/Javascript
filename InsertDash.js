
// function insertHyphen(str) {
//     var strArr = str.split('');
//     console.log(strArr);
//     var numArr = strArr.map(Number);
//     console.log(numArr)
//       for(var i = 0; i < numArr.length; i++) {
//         if(numArr[i-1]%2===0 && numArr[i]%2===0) {
            
//           numArr.splice(i, 0, '-');
//         }
//       }
//     return numArr.join('');
//   }
//   console.log(insertHyphen('0298'));


//   numArr=[0,2,9,8]
//   for(var i = 0; i < numArr.length; i++) 
//     console.log(numArr[i-3])


function checking(str){
let strRe=str.split('');
//console.log("String is" +" "+ strRe);
//console.log(strRe.map(Number))
let numArr=strRe.map(Number);
console.log("NumArr is :" + " "+ numArr);

for(let i=0;i<numArr.length;i++){
    
    
    if(numArr[i-1]%2===0 &&numArr[i]%2===0 ){
        console.log(numArr[i+2])
        numArr.splice(i,0,'-')
    }
}
return numArr.join('')

}

console.log(checking('1223445'));


// let a="1234";
// let s= a.split('')
// console.log(s)
// let d=s.map(Number);
// console.log(d)