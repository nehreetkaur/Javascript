function checking(str){
    let count=0;
    let words= str.split('');
    for(let i=0 ;i<words.length;i++){
        console.log(words[i])
        if(words[i]==="a" || words[i]==="e" || words[i]==="i" || words[i]==="o" || words[i]==="u" ){
          count++;
        }
    }
    return `Vowel count is ${count}`;
}


console.log(checking("the quick brown fox"))