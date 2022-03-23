//Q JavaScript: Alternet of trim function using regular expression

function checking(str){
    let reg=str.replace(/^\s+|\s+$/g, "");

    return reg;

    
}

console.log(checking(' w3resource '));

//exclude  start and end white-space  /(^\s*)(|\s*$)/g

// convert 2 or more spaces to 1  /str.replace(/[]{2,}/g," ")



