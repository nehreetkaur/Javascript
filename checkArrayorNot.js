function checkArray(arr){             //We can use instanceof Array to check wheather given input is Array or not.

    if(arr instanceof Array){
        return true;
    }

}

const arr1=["777","444","222","111"];   // Another method Array.isArray to check weather given input is array or not
console.log(checkArray(arr1))

const arr2= ["888","999","777"]
console.log("its " + Array.isArray(arr2))