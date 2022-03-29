function rotation(a,d){

// let p=arr.slice(d);
// console.log("p is" + p);
// console.log("Arr is" + arr)
// let c= arr.slice(0,d);
// console.log("C is " + c);

for(let i=0;i<d;i++){
    console.log(i);  // brute force method
    let m=a.shift()
    //console.log(m);
    a.push(m)
    console.log (a)
}


}



console.log(rotation([1,2,3,4,5],4))

// function rotLeft(a, d) {
//     return  [...a.slice(d), ...a.slice(0,d)]
// }



// let result = arr.slice(d).concat(arr.slice(0,d)) 
// return result 


