//const arr = ['a', 'a', 'a', 'a', 'c', 'd'];
// const arr=[1,1,2,2,2,3,4,5]

// //const count={};

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
//     let item=arr[i];
//     if(count[item]){
//         count[item]+=1;
//     }else{
//         count[item]=1;
//     }

    
// }

//console.log(count);



let rr="HEllo THERE";

for(let i=0;i<rr.length;i++){
    if(rr[i]===rr[i].toLowerCase()){
      rr[i]=rr[i].toUpperCase();
    }if(rr [i]===rr[i].toUpperCase()){
              rr[i]=rr[i].toLowerCase();
    }

}
console.log(rr)