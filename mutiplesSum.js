
let count=0;
function sumOfMultiples(num){
 for(let i=0;i<=num;i++){
     if(i%3===0 || i%5===0){
         console.log(i)
         count +=i;
     }
 }
return count

}

console.log(sumOfMultiples(10))