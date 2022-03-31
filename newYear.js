
function bribes(q){
    let count=0;
    for(let i=q.length-1;i>0;i--){
        //console.log(i + " "+ "value of q[i]" + q[i])
        //console.log(`value of i+1 is ${i+1}`)
        //console.log(`${q[i]} - ${i+1} is ${q[i] -(i+1)} `)
        if(q[i] -(i+1) > 2){
            
            console.log("too chaotic")
            return;
        }
        for(let j=Math.max(0,q[i]-2);j<i;j++){
            console.log(Math.max(0,q[i]-2))
            if(q[j] >q[i]){
                count++
            }
        }
    }
    console.log(count);
}


bribes([1,5,2,3,4]);