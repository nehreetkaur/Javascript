function checking(str){
    let s1= str.split('');
    console.log(`S1 is ${s1}`);
    
        s1.sort((a,b)=>{
           if(a<b){
               return -1;
           }
           if(a>b){
               return 1
           }
           return 0;
        })
        return s1.join("");
    }


console.log(checking("MANGO"))