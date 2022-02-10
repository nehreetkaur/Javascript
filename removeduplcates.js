let array=[2,2,3,3,4]

let result=array.filter((c,index)=>{                
    console.log("C is" + c);
    console.log("Index is "+ index)
  return array.indexOf(c)===index;
})


console.log(result);


// //let chars = ['A', 'B', 'A', 'C', 'B'];                         c    index   indexof return first occurance of c
//                                                                   2    0    ==>   0
//                                                                   2    1    ==>   0
//                                                                   3    2    ==>   2
//                                                                   4    3    ==>   3
//                                                                   5    4   ==>   4
//                                                                   6    5    ==>  5
//                                                                   6    6    ==>  5
//                                                                   7   7     ==>  7

let chars=[2,2,3,4,5,6,6,7];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

//console.log(uniqueChars);

// another method
let fruits=["apple","apple","carrot","mango","mango"];
let results3= [...new Set(fruits)];
console.log(results3)

// another one for objects

let array5=["A","B","C","A","E","B"];

let count={};
array5.forEach((item)=>{
    if(count[item]){
      count[item]+=1;
    }else{
      count[item]=1
    }
})

console.log(count)