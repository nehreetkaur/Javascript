//Q JavaScript: Alternet of trim function using regular expression

function checking(str){
    let reg=str.replace(/^\s+|\s+$/g, "");

    return reg;

    
}

console.log(checking(' w3resource '));

//exclude  start and end white-space  /(^\s*)(|\s*$)/g


