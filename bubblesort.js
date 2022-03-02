function bubblesort(arr){
  isSwap=false;
  len=arr.length;
  let i,j;

  for(i=0;i<len;i++){
      isSwap=false;
      for(j=0;j<len;j++){
          if(arr[j] > arr[j+1]){
              let temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
              isSwap=true;
          }
          
      }
      if(!isSwap){
        break;
    }
      
  }
  console.log(arr)
}
let arr = [243, 45, 23, 356, 3, 5346, 35, 5];
bubblesort(arr);