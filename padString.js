function checking(str){
    let word= str.slice(3);
    return word.padStart(str.length,"*")
}

console.log(checking("1111111"))

console.log("hello".repeat(2));


function checking2(str,sym){
    let result= str.slice(str.indexOf(sym)+1);
    return result;
}

console.log(checking2("HelloGirls_beatifuls","_"))

//console.log("helloz".slice(1,3));