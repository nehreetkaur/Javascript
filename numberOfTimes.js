function checking(arr){
let count={};

arr.forEach((item)=>{
  if(count[item]){
      count[item]+=1;
  }else{
      count[item]=1
  }
  
})
return count;

}
let array=["ban","ban","love","kiss","luv"]
console.log(checking(array));

// binary search for practice;//


// function checking(arr,value){
//     let high=arr.length-1;
//     let low=0;
//     let midpoint=0;
//     while(low<=high){
//         midpoint=Math.floor((high+low)/2);
//         if(value===arr[midpoint])
//         return arr[midpoint];
//         else if(value>arr[midpoint]){
//             low=midpoint+1;
//         }
//         else{
//             high=midpoint-1
//         }
//     }

//     return "not found"
// }

// console.log(checking([23,45,66,77,88,12],66))