//this works both for number and string and if its number , change in to string first and then split func work on it.

function pallindrome(word){
    return word=== word.split("").reverse().join("");
}

if(pallindrome("121")){
    console.log("Its pallindone")
}else{
    console.log("Not paliindone")
}

// for numbers

function checking(num){
    return num=== parseInt(num.toString().split("").reverse().join(""))
  
    
}

if(checking(111)){
    console.log("pallindone")
}else{
    console.log("its not")
}

// let array=[1,2,3,4,5,6,7];  to print array backwords
// for(let i=array.length-1;i>=0;i--)
// console.log(array[i])