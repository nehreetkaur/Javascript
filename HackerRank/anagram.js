// anagram hackerrank solution

function checking (a,b){

let A= a.split('').length;
let B= b.split('').length;

let count= A+B;
let pairs=0;

for(let i=0;i<A;i++){
    for(let j=0;j<B;j++){
        if(a[i]==b[j]){
            pairs++;
            b[j]=0;
           
            break;

        }
    }
}

console.log(count-(pairs*2))

}
    

//checking("hellottw","ehlol");





// to check the function one string characters present in another string;
// let string1="helllo";
// let string2="hlleol"
// for(let i=0;i<string1.length;i++)

// console.log(string1.includes(string2[i]))

// unction main() {
//     var a = readLine().split("");
//     var b = readLine().split("");
// var countA = a.length;
// var countB = b.length;
// var count = countA + countB;
//     var pair = 0;
//     for(var i = 0; i < countA;i++){
//         for(var j = 0; j < countB; j++){
//             if(a[i] == b[j]){
//                 b.splice(j,1);
//                 pair++;
//                 break;
//             }
//         }
//     }
//     console.log(count - (pair*2));
// }


function makeAnagram(a, b) {
    const aAr = a.split('');
    const bAr = b.split('');
    
    let removed = 0;
    
    for(let i = 0; i < aAr.length ; i++){
        if(bAr.includes(aAr[i])){
            bAr.splice(bAr.indexOf(aAr[i]), 1)
            console.log(bAr);
        }else{
            removed++;
            //console.log(removed);
            
        }
    }
    
   
    return (removed + bAr.length)

}

console.log(makeAnagram("helloq","ehlolwtt"));