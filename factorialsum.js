function checking(num){
    let output=[];
    for(let i=1;i<num;i++){
        if(num%i==0){
            output.push(i)
            console.log(output)
        }
    }
  let result= output.reduce((acc,count)=>{
         return acc+count
  })
        if(result===num){
            return (`${num} is a perfect num`)
        }
        return `${num} is not perfect`
}

console.log(checking(246));