// to find out if keys are equal to string or not

let person={
    firstName: "jay",
    LastName:"Shetty",
    age:26,
    status:"single"
}



function checkObjKeys(obj){
    for(let keys in obj){
      
        if(typeof obj[keys] ==="string"){
            console.log( keys , ":" , obj[keys])
        }
    }
}

checkObjKeys(person)