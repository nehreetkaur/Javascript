// anagram hackerrank solution

function checking (a,b){

    var a = a.split("");
    var b = b.split("");
var countA = a.length;
var countB = b.length;
var count = countA + countB;
console.log(count)
    var pair = 0;
    for(var i = 0; i < countA;i++){
        
        for(var j = 0; j < countB; j++){
       
            if(a[i] == b[j]){
            
               //console.log(`value of a[i] is ${a[i]}`)
               pair++;
               console.log(`b.replace(${j},'')`)

               
              
               
                break;
            }
        }
    }
    console.log(count - (pair*2));
}
    

checking("hellott","ehlol");





// to check the function one string characters present in another string;
// let string1="helllo";
// let string2="hlleol"
// for(let i=0;i<string1.length;i++)

// console.log(string1.includes(string2[i]))
