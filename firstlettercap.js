function checking(str){

    return str.toLowerCase().split(' ').map((s)=>{
        return s.replace(s[0],s[0].toUpperCase())
}).join(" ")
}

console.log(checking("helLo google wifi"));



let check="hellothere";
console.log(check.charAt(3));
console.log(check.substring(0,2)) // this will not include 2... strat at 0 and stop at 2(not included);
console.log(check.slice(1,4)); // same as substring

