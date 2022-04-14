// string=AAABAABAB ==> should be like this ABABABAB


function checking(s){
      let count=0;
    let str= s.split('');
    //console.log(str);
    for(let i=0;i<str.length;i++){
    //console.log(`${s[i]}`);
     console.log(s[i]===s[i+1])

     console.log(s[i+1])

   
}


}

checking("ABABA");