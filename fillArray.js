let result= Array(5).fill(2,0)    // array(5)==> for length of array;
console.log(result)               // .fill(first(2))==> to fill array with 2;
                                 //   .fill(second value) from where to start filling the array;


// second way to fill array.
let result1=[];
 function filling(value,len){
    for(let i=0;i<len;i++){
        result1.push(value)
        //console.log(result1)
    }
    return result1;
 }                                


 console.log(filling(2,4))