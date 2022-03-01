

function checking(str,word){
    let count=0;
    for(let i=0;i<str.length;i++){
 if(word===str[i]){
     count++
 }
    }
    return `${word} is repeated ${count} times`
}


console.log(checking("helloooz","o"))