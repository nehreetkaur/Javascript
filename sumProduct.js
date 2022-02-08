
let sum=0;
let product=1;

function sumProduct(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        sum+=arr[i]
        product*=arr[i];

    }
    return `sum is ${sum} and product is ${product}`
}

console.log(sumProduct([2,3,4,5]))