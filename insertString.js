function checking(main,insertStr,pos){
    if(typeof insertStr===undefined){
        return insertStr= "";
    }

    if (typeof pos===undefined){
        return pos=0;
    }

    let result= main.split(" ");
    result.splice(pos,0,insertStr)
return result.join(" ");
    
}

console.log(checking("I Love Icecream","chocolate",2))

// let str="I Love Icecream";
// let result=str.split(" ");
// console.log(result)
//  result.splice(2,0,"chocolate");
// console.log(result)