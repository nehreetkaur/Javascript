function checking(arr){
  let n=0;
  return n=arr[0];
}


const arr1=["777","666","555","444","999"];
//console.log(checking(arr1));


// second way to return the fitst elem in array


function checking2(array,n){
if(array == null){
    return "array is empty";
}if(n == null){
    return array[0]
}
return array.slice(0,n)

}



console.log(checking2(arr1,2))