
// function bribes(q){
//     let count=0;
//     for(let i=q.length-1;i>0;i--){
//         //console.log(i + " "+ "value of q[i]" + q[i])
//         //console.log(`value of i+1 is ${i+1}`)
//         //console.log(`${q[i]} - ${i+1} is ${q[i] -(i+1)} `)
//         if(q[i] -(i+1) > 2){
            
//             console.log("too chaotic")
//             return;
//         }
//         for(let j=Math.max(0,q[i]-2);j<i;j++){
//             console.log(Math.max(0,q[i]-2))
//             if(q[j] >q[i]){
//                 count++
//             }
//         }     bribes([1,5,2,3,4]);
//     }
//     console.log(count);
// }



// function bribes(arr){
//     console.log(`Actual array : ${arr}`);
  
// let count=0;
// //console.log(`Actual array length is ${arr.length}`);
// //console.log(`Array -1 length is ${arr.length-1}`);
// for (let i=arr.length-1; i>0;i--){
//   //console.log(`Position of index ${i} @ ${arr[i]}`)
//   //console.log(` ${i}==i+1 is ==> ${i+1}`)
//   if(arr[i]-(i+1) > 2){
//       console.log('Too Chaotic');
//       return;
//   }
//   for(let j=Math.max(0,arr[i]-2);j<i;j++){
//       if(arr[j] > arr[i])
//       count++;
//   }
// }
//  console.log(count)
// }

function bribes(q){
 let bribeCount=0;
 let isFlag=false;
 for(let i=q.length-1 ;i>=0 ;i--){
     if(q[i]-i >2 ){
         console.log('Too chaotic');
         isFlag=true;
         break;
     }
     
     if((i-2 >=0) && q[i-2]==i+1){
         q[i-2]=q[i-1];
         q[i-1]=q[i]
         q[i]=i+1
         bribeCount+=2;
     }

     if((i-1 >=0) && q[i-1]==i+1){
         q[i-1]=q[i]
         q[i]=i+1
         bribeCount++;
     }
 }
 
 if(! isFlag){
     console.log(bribeCount);
 }


}


bribes([1,2,3,4,8,5,6,7])