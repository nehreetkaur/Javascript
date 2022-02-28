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