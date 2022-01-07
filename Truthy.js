function   truthyChecker (arr){
let count=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]){
        count++
    }
}
return count;

}



let values=[0,NaN,undefined,'',null,1,true];
console.log(truthyChecker(values))


// negative num not included in falsy.