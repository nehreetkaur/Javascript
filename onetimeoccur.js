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
  

let final= Object.keys(count).find((keys)=>{
    return count[keys]===1;
})

return final;


}





console.log(checking("the qquk brown fox jump over the moonz"))  // to tell the character which is not repeated


// second approach

function checking1(str){
    for(i=0;i<str.length;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return "_"
}

//console.log(checking1("hehlloz"));


// I am passing a string to look that particular is present or not;


let string="hello there people hello";
let find="pretty";
let count=0;
let result=string.split(" ");
//console.log(result);
for(let i=0;i<result.length;i++){
    //console.log(result[i])
    if(result[i]===find){
        //console.log("hurray")
        count+=1;
        
    }
   
}

console.log(`${find} is repeated that many ${count} times`)



