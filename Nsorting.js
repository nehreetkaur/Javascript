function sorting(arr,n){
    let sorted=arr.sort((a,b)=>{
        return b-a;
    })
    

    return sorted[n-2];
}

//console.log(sorting([2,4,5,6,7,8,9],2))



// function nthlargest(array, highest) {
//     array.sort();
//     l=array.length;
//     if(highest>l)
//         return("undefined");
//     else
//         return(array[l-highest+3]);
// }

// console.log(nthlargest([2,4,5,6,7,8,9],2))



function nthlargest(array, n){

    array.sort(function(a, b) {
        return b - a; //organises the array in descending organises
      });

    let i = n - 1; //i is the index of the nth largest number
    console.log(i);
    
    console.log(array[i]);

}

console.log(nthlargest([2,4,5,6,7,8,9],3))