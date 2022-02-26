function checking(arr){


let res1=arr.sort((a,b)=>{
    return b-a
})


return `Second largest num is ${res1[1]}
sec lowest num is ${res1[arr.length-2]}`
 
}


function checking1(arr){
let res2= arr.sort((a,b)=>{
    return a-b
})
return `Second lowest num is ${res2[arr.length-2]}`

}



const numbers=[11,10,2,98,100]
//console.log(numbers.length-2)

 console.log(checking(numbers))
// console.log(checking1(numbers))