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