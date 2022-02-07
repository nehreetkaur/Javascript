
// Three methods that how we can clone array in three ways.


const checking=function (arr){
      return [...arr];
}

const arr1=["777","666","555","444","999"];
console.log(checking(arr1))


//second method

const checking2=(arr)=>{
   return arr.slice();
}

console.log("**********second way*******")
console.log(checking2(arr1))

// Third way
console.log("************third way***********")
console.log(Array.from(arr1));