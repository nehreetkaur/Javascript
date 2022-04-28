//Question is:  Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one


let obj1={
    name:"shiva",
    age:"29",
    complexion:"fair"
}

let obj2={
    
    age:"29",
    complexion:"fair"
}


// we will write a function 

function checking(obj1,obj2){
    // will iterate the second one

    for( key in obj2){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true
}

console.log(checking(obj1,obj2));