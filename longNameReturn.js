

function checking(arr){
    let text="";
    let result;
    result= arr.sort((a,b)=>{
        return b.length -a.length;

    })
    return  `Longest string in array is ${result[0]}`
}

















let names=["Moscow","Agentina","United Kingdom","United States Of America"];
console.log(checking(names));