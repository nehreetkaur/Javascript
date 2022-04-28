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

// it is to check the logic if key[value] in first object are same as key and value in obj2.
//if ob2 has same everything but has extra key value in it, will return false in that case

function checking(obj1,obj2){
    // will iterate the second one

    for( key in obj2){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true
}

//console.log(checking(obj1,obj2));


// split in two demionsional array

let data='id, name, email\n0, Todd, todd@gmail.com\n1, Petra, petra@gmail.com';

function check(str,delimiter=','){
    let titles=str.slice(0,str.indexOf("\n")).split(delimiter);
    
    let rows=str.slice(str.indexOf('\n')+1).split('\n')
    return rows.map((row)=>{
        let values= row.split(delimiter)

        return titles.reduce((obj,acc,i)=>{
            obj[acc]=values[i]
            return obj;

        },{})
    })

}



console.log(check(data,','));