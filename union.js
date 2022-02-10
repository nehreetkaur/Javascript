// function union(arr1,arr2){
//     let result=[...arr1,...arr2]
//     console.log(result);
//     const values=result.filter((items,i)=>{
//           return result.indexOf(items)===i;
//     })
//     return values;
// }

// console.log(union([1,2,3],[3,2,6,1]))

// find the difference in two arrays

let array1=[2,3,4,5,6];
let array2=[3,2,7,8,9];

const results=array1.filter((item)=>{
    return  !array2.includes(item);
})
    const results2=array2.filter((item)=>{
        return !array1.includes(item) 
    })

    let finale= [...results,...results2];
    console.log(finale)

console.log(results )
console.log(results2)