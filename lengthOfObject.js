let student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};

//console.log(Object.keys(student).length)



let library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

    //console.log(library)

//     for(let keys of library){
//         //console.log(keys)  // will display the whole object with key and value
        
//     }

// for (let key of Object.entries(library)){
//     //console.log (key)
//     /**It gives us how many entries at each index means every index have 2 entries */
// }
for(let i=0;i<library.length;i++){
    //console.log(library[i])
}

for(let keys in library){
    //console.log(library[keys].readingStatus);

    /** by doing this for in like for in i as we can get index
     * library[keys].title will show all the tiltles in object.
     * 
     */
}

for (let i of Object.keys(library)) {
    //console.log("Key:", i, "| Value:", library[i]);
   // console.log("Key is ", i , "value is " , library[i])
   if(library[i].readingStatus===true){
console.log(library[i]);
}
if(library[i].readingStatus===false){
    console.log("Read again" , library[i])
}
}