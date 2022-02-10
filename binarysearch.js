function binarysearch(arr,value){               // sort the array to do binary search
let high=arr.length-1;
let low=0;                                      // works both on numbers and strings .
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
let fruits=["apple","banana","carrot","flower"]
console.log(binarysearch(fruits,"mango"))