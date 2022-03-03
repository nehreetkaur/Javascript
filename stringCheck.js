
// to check wheather a input is string or not.

function checking(str){
    if(typeof (str)==="string"){
        return `${str} is a string`
    }
    else{
        return `${str} is not a string`
    }
}

console.log(checking("I am enough"));

// to check wheather a string is blank or not

function checking2(str){
    if(str===""){
        return true;
    }
    else{
        return false;
    }
}

console.log(checking2(""));

