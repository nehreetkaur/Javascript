// let array=["A","B","C","D","E"];
// //array.splice(1,0,"f");
// let result=array.splice(1,1);


// console.log(result);
// console.log(array)

function change(arr,old,cool){
console.log(arr);
let elem=arr[old];
console.log("elem is " + elem);
arr.splice(old,1);
//console.log( arr.splice(cool,0,elem));

}


function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}
//let array=["A","B","C","D","E"];
//console.log(arraymove(["A","B","C","D","E"],0,2))

// const numbers = [1, 2, 3];
// const moveElement = (array, from, to) => {
//   const copy = [...array];                     // this function tried and tested and worked.
//   const valueToMove = copy.splice(from, 1)[0];
//   copy.splice(to, 0, valueToMove);
//   return copy;
// };

// console.log(moveElement(numbers, 0, 2))
// > [2, 3, 1]
//console.log(moveElement(numbers, -1, -3))
// > [3, 1, 

function shiftingOfArray(arr,old,cool){
    console.log("Actual Array" + arr)
  let copy=[...arr]
  let value=copy[old]
    let oldElem= copy.splice(old,1);
    console.log("OldElem Is " + oldElem)
    copy.splice(cool,0,value);
    return copy;
}

const numbers = [1, 2, 3];
console.log(shiftingOfArray(numbers, 0, 2))