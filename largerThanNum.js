const checking=(arr,value)=>{
   return arr.filter((item)=>{
    return item >=value;
   })
}


let array1=[22,33,44,55,66,77];

console.log(checking(array1,55))