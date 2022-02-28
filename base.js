// function checking(base, exponent){
//     return Math.pow(base,exponent);
// }

// //console.log(checking(3,3));

// // to find unique characters in string means repeated

// // first approach

// function checking(str){
//    str= str.split("")
//    console.log(str);
//    return [...new Set(str)].join('')
// }


// // second approach

// function checking1(str){
//     let uniq="";
//     for(let i=0;i<str.length;i++){
//         if(uniq.includes(str[i])===false){
//             uniq+=str[i]
//     }
// }
// return uniq;
// }

//console.log(checking1("thequickbrownfoxjumpsoverthelazydog"))


const array1=['A','A','B','C','C','S'];

const checking=(arr)=>{
    let count={};
    arr.forEach((item)=>{
        if(count[item]){
            count[item]+=1
        }
        else{
            count[item]=1
        }

    })
    return count;
}


  console.log(checking(array1))