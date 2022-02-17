function checking(str){
console.log(`String is ${str}`);
let list=[];
for(let i=0;i<str.length;i++){
    console.log(`I is ${i}`)
  for  (let j=i+1;j<str.length+1;j++){
      
      list.push(str.slice(i,j));
      console.table(str.slice(i,j))
      console.log(`I +1 is ${i+1} value of str.length+1: ${str.length+1} `)
    }
}
return list;
}

console.log(checking("dog"));

