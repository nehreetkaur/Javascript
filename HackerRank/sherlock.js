// hackerrank question

// s:abccc


function checking(s){
    let obj={};
    let freq=[]
    // convert string in to array;
s=s.split('');
console.log(s);
// getting the frequencies
s.forEach((item)=>{
     if(obj[item]){
         obj[item]+=1;
     }
     else{
         obj[item]=1
     }
})
console.log(obj);
// push the freq in the freq array
for(let val in obj){
    freq.push(obj[val])
}

freq=freq.sort();
let first= freq[0];
//console.log(first);
let sec= freq[1];
let seclast=freq[freq.length-2];
//console.log(seclast)
let last=freq[freq.length-1];
//console.log(last)
if(first===last){
    return 'YES'
}

if(first==1 && sec==last ){
    return 'YES'
}

if(first==sec && sec==seclast && seclast==(last-1)){
return 'YES'
}
else{
    return 'NO'
}

}







console.log(checking("aabbccd"));