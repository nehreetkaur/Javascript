function binarysearch(arr,value){
let high=arr.length-1;
let low=0;
let mid=0;
while(low<=high){
    mid=Math.floor((high+low)/2)
    if(value==arr[mid]){
        return arr[mid];
    }else if(value > arr[mid]){
        low=mid+1
    }else{
        high=mid-1;
    }
}

return "not found";
}
let number=[2,3,4,5,6,7,8]
console.log(binarysearch(number,5))