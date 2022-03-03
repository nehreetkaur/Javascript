
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