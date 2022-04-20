// hackerrank question

// s:abccc

function checking(s){
    let count={};
    let total=0;
    s=s.split('');
    console.log(s)
    s.forEach((item)=>{
      if(count[item]){
          count[item]+=1
      }
      else{
          count[item]=1;
      }
    })
    console.log( count)
   total= Object.keys(count).map((item)=>{
      if (count[item]===1 || count[item]===2){
          return true;
      }
            return false;
  })
  return total;

}

console.log(checking("aaaabbbcc"));