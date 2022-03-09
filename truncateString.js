function checking(str,num){
     if(str.length > num){
      return   str.slice(0,num) + "...";
     }
     else{
         return str;
     }
}

console.log(checking("Helloozz",3))

// to chop a string in to given strength ["w3resource"] into ["w3", "re", "so", "ur", "ce"]



function returnChunksArray(str, chunkSize) {
    var arr = [];
    while(str !== '') {
      arr.push(str.slice(0, chunkSize));
      console.log(arr);
      str = str.slice(chunkSize);
      console.log(str)
    }
    return arr;
  }








  console.log( returnChunksArray("w3resource",2))


  //console.log("w3resource".slice(2))

//   console.log("hello".lastIndexOf("e"))
//   console.log("hello".indexOf("e"))


// &lt; with <
// &gt; with >
// &quot; with "
// &#39; with '
// &amp; with &


function unEscape(htmlStr){
  htmlStr = htmlStr.replace(/&lt;/g , "<");	 
  htmlStr = htmlStr.replace(/&gt;/g , ">");     
  htmlStr = htmlStr.replace(/&quot;/g , "\"");  
  htmlStr = htmlStr.replace(/&#39;/g , "\'");   
  htmlStr = htmlStr.replace(/&amp;/g , "&");
  return htmlStr;
}

let unEscapedStr =unEscape(`&lt;script&gt;alert(&#39;hi&#39;)&lt;/script&gt;`);
console.log(unEscapedStr);

