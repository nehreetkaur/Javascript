function checking(str,num){

return str.split(" ").slice(0,num).join(" ")
    
}

//console.log(checking("The quick brown fox jumps over the lazy dog",4))

// function truncate(str, no_words) {
//     return str.split(" ").splice(0,no_words).join(" ");
// }

// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

//number of times the occurence of string;
function checking(str,word){
    let count=0;
    str=str.split(" ");
    str.forEach((e)=>{
      if(e===word){
          count++;;
      }
    })
    return `${word} is repeated ${count} many times.`
}

console.log(checking("The quick brown fox jumps over the lazy fox dog","the"));