
function checking(arr,value){
    let sum=[];
    for(let i=0;i<arr.length;i++){
        console.log("I is" + i);
        for(let j=i+1;j<arr.length;j++)
            //console.log("J is" + arr[j]);
            if(value==arr[i]+arr[j]){
            sum.push(arr[i],arr[j])
        }
    }
    return sum;
}

console.log(checking([2,3,4,5,6],7))