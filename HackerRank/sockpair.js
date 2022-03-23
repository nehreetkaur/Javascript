function checking(n,arr){
  let obj={},count=0;

  for(i=0;i<n;i++){
      if(obj.hasOwnProperty(arr[i])){
          count++;
          delete obj[arr[i]];
      }
      else{
          obj[arr[i]]=0;
      }
  }
 return count;
}


console.log(checking(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))


// if you have found a pair and then delete it and then proceed;
// one pair = 2 numbers;