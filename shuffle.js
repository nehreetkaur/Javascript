// Fisher yates method;


// let array=[12,11,34,56,78];

// // reverse iteration with for loop                                                   
// function shuffle(arr){
// for(let i=arr.length-1;i>0;i--){
//     let j= Math.floor(Math.random()*(i+1))
//     [arr[i],arr[j]]=[arr[j],arr[i]];
// }
// }
// console.log(array)

// console.log("***************after shuffle******")
// console.log(shuffle(array))





  function fisherYatesShuffle(arr){
    for(let i =arr.length-1 ; i>0 ;i--){
        let j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
}

var tmpArray = [1, 3, 5];
fisherYatesShuffle(tmpArray);
console.log(tmpArray);