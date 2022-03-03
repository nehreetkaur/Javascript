
// to check wheather a input is string or not.

function checking(str){
    if(typeof (str)==="string"){
        return `${str} is a string`
    }
    else{
        return `${str} is not a string`
    }
}

//console.log(checking("I am enough"));

// to check wheather a string is blank or not

function checking2(str){
    if(str===""){
        return true;
    }
    else{
        return false;
    }
}

//console.log(checking2(""));

// split string in to array of words;

function checking3(str){
    return str.split(" ");    // little space between them converted words in to array
}  
                            // no space between them converted in to individual word in to array.
console.log(checking3("Shiva Pandya"))

// to truncate the string

function trimming(str,value){
return str.slice(0,value)
}

//console.log(trimming("Robin Singh",4))


// to return the string in abbrevated form

function  checking4(str){
    const strArr = str.split(' ');
   let res = '';
   strArr.forEach(el => {
      const [char] = el;
      //console.log(el.charAt(0))
      //console.log(el)
      if(char === char.toUpperCase() && char !== char.toLowerCase()){
         res += char;
      };
   });
   return res;
};


//console.log(checking4("Shiva Ravi Pandya"));


// let str= "hello there";
// let length= str.split(" ");
// console.log(length[0])
// length.forEach((el)=>{
// let ss= el.charAt(0).toUpperCase();
// console.log(ss)
// })
// like if we split the string["shiva","pandya"]
//and when we loop through with forEach and
// then use charAt(0) will give us back S and p
// which is on 0th index of both the strings and then we 
// do our calculation how we like;

function stringCheck(str){
let result= str.split(" ");
let final=[];
result.forEach((e)=>{
  console.log(e.charAt(0));
  final.push(e.charAt(0))
})
return `${result[0]}  ${final.pop()}`. toUpperCase();
}

console.log(stringCheck("Robin Singh"));

