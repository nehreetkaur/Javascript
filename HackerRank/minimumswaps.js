function countswaps(arr){
    let count=0;
    // iterate the array

    for(let i=0;i<arr.length;i++){
        if(arr[i] !==(i+1)){
         let currIndex= arr.indexOf(i+1);
         let temp=arr[i];
         arr[i]=arr[currIndex];
         arr[currIndex]=temp;
         count++;
        }
    }
    return `${count}`;
}

 let numbers=[7,1,3,2,4,5,6]
console.log(countswaps(numbers));

// optimized solution and better solution
function countswaps1(arr){
    let count=0;
     // iterate the array again and minus from the temp 
    for(let i=0;i<arr.length;i++){
         while(arr[i]!==i+1){
             let temp= arr[i];

             arr[i]=arr[temp-1];
             arr[temp-1]=temp;
             count++
         }


    }
    return count;
      

}
let number=[4,3,1,2];
console.log(countswaps1(numbers));

// both are working but second one takes less time to execute .