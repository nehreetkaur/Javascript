function getMethods(obj){
   return Object.getOwnPropertyNames(obj).filter((item)=>{
       return typeof obj[item]==='function';
   })
}

console.log(getMethods(Math))


// url display 
// const url = new URL('../cats', 'http://www.example.com/dogs');
// console.log(url.hostname);
// url.hash="blah"
// url.pathname='test.html'
// url.port='3000'
// console.log(url.href);

function parseurl(href){
    let l=document.createElement('a');
    l.href=href;
    return l;
}

let l=parseurl('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python')
l.hash='blah'
console.log(l.hostname);
console.log(l.pathname);
console.log(l.href);

//console.log(parseurl('http://www.example.com:3000/test.html#blah'))

