var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];


  let result=   library.sort(function(a, b) {
         return b.title.localeCompare(a.title)
     });

   console.log(result)  //Its tried and tested and checked 


let ss= library.sort((a,b)=>{
     if(a.title < b.title){       // its tried and tested and working
         return 1;
     }
     if(a.title>b.title){
         return -1
     }
     return 0;
})
    console.log(ss)