//Q:- to find vowels in the string


function checking(str){

    let result= str.match(/[aeiou]/g).length
    return result;

}

console.log(checking("The quick brown fox jump over the lazy dog"));


// regex = “((http|https)://)(www.)?” 
// + “[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]” 
// + “{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)”
 

// The URL must start with either http or https and
// then followed by :// and
// then it must contain www. and
// then followed by subdomain of length (2, 256) and
// last part contains top level domain like .com, .org etc.