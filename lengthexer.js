function checking(len){
    let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let clen=chars.length;
    len=len || 32;
    let arr=[];
    for(let i=0;i<len;i++){
        arr[i]=chars.charAt(Math.floor(Math.random()*clen));
    }
    return arr.join('')
}

console.log(checking(10)); 