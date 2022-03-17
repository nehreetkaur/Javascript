//Question:-JavaScript program to test the first character of a string is uppercase or not

function checking(str){
 let reg= /^[A-Z]/g;

 if(reg.test(str)){
     console.log("First letter is upperString")
 }
 else{
     console.log("First letter is not upperString")
 }
   
}

checking("ruBy")