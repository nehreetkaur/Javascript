let a=[1,2,3];
let b=['A','B','C'];

let result=a.map((e,i)=>{
  //console.log(`E is ${e} I is${i}`) ;
 // console.log(`b is${b[i]}`)
 //console.log(b[i])
  console.log ([e,b[i]]);
})

console.log("Result is " + result);


// var a = [1, 2, 3]
// var b = ['a', 'b', 'c']

// var c = a.map(function(e, i) {
//   return [e, b[i]];
// });

// console.log(c)