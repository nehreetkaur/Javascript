// n=5 , we will create array n+1 , so in iteration it will not go out of bound;
// b=2 we put b+1 which is 3 negative k vlaue to stop and put value till b.


//for example if a=2 b=3 we will stop at index 3 as array is here 1 indexed


function manipulation(n, queries) {
    let arr = new Array(n + 1).fill(0);
    queries.forEach(([a, b, k]) => {
        arr[a - 1] += k;
        arr[b] -= k;
    })
    let sum = 0;
    let max = 0;
    arr.forEach(val => {
        sum += val;
        max = Math.max(sum, max)
    })
    return max;
}

console.log(manipulation(12,[[2,7,4],[5,9,2],[6,12,8]]))


/// brute force method


function manipulation2(n,queries){
    let arr= new Array(n+1).fill(0);
let max=0;
    queries.forEach(([a,b,k])=>{
        for(let i=a;i<=b;i++)
        arr[i]+=k;
        if(arr[i]> max){
            max=arr[i]
        }

    })

return max;
}