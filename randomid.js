// both approaches work to generate random string;


function checking(num){
  let text=""
    let strings= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i=0;i<num;i++){
        text+= strings.charAt(Math.floor(Math.random()*strings.length)) // we define in forloop to loop for the num we passes as argument;
        console.log(text)
    }
    return text;

}
console.log(checking(5))

// second approach

function checking1(len , strings){
     strings="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let text ="";
for(let i=0;i<len;i++){
    let random=Math.floor(Math.random()*strings.length);
text+= strings.substring(random,random+1);
}
return text;
}
console.log(checking1(5,'PICKCHARSFROMTHISSET'))