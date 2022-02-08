const array=[2,3,5,2];
let sum=0;
function squares(array1){
for(let i=0;i<array1.length;i++){
    //console.log(array1[i]);
   
    sum+=Math.pow(array1[i],2);
    //console.log(sum)
}
return sum;
}
console.log(squares([2,3,5,2]))