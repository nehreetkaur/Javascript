function checking(str){    // working

  let ss= str.split(' ').sort((a,b)=>{
     return b.length-a.length
  })

  return ss[0];

}

//console.log(checking("The quick brown fox jumped over the lazy dog"));


function checking(str){
    let text=str.split(' ');
    let maxim=0;
    let word="";
    for(let i=0;i<text.length;i++){
        if(text[i].length > maxim){
            maxim=text[i].length;
            word=text[i];
        }
    }
    return word;
}

console.log(checking("The quick brown fox jumped over the lazy dog"));