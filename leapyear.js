function checking(year){
if((year%4===0 && year%100!==0) || (year%100===0 && year%400===0)){
    return year
}else{
    return false;
}

}


let arr1=[];
let arr2=[]
function inrange(start,end){
    for(let i=start;i<=end; i++){
      arr1.push(i)
    }

    arr1.forEach((year)=>{
       if(checking(year)){
           arr2.push(year)
       }
       
    })
    return arr2;
}

console.log(inrange(2000,2012))