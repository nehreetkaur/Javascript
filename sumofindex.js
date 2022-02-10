let array1=[2,3,4,5];
let array2=[2,1,3,4];    // 4,4,7,9

const results=array1.map((item,index)=>{
    console.log(item)
   return array2[index] + item;
})

console.log(results)