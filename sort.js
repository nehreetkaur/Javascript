function sorting(arr){              // this function working with numbers and not with strings
    let rr= arr.sort((a,b)=>{
        return b-a;
    })
    return rr;
}

let numbers=[4,5,8,9,1];
let words=["banana","carrot","apple"]

//console.log(sorting(numbers))

words.sort((a,b)=>{         // this is ascending order for strings
                                   //a<b=-1 for ascending

    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    return 0;

})

console.log(words)
