function checking(str){
    let result=str.split("");
  let count={};
  
  result.forEach((item)=>{
  if(count[item]){
      count[item]++
  }
  else{
      count[item]=1
  }
  })
//  
// let final;
let final= Object.keys(count).find((keys)=>{
    return count[keys]===1;
})

return final;


}





//console.log(checking("hehlloz"))


// second approach

function checking1(str){
    for(i=0;i<str.length;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return "_"
}

console.log(checking1("hehlloz"));


console.log("hello".lastIndexOf("e"))