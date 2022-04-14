// to do project in udemy course

let input=prompt("what do you want to do");
let todo=["shopping","walking"];

while(input!=='q' && input !=='quit'){

if(input==='list'){
    for(let i=0;i<todo.length;i++){
        console.log(`${i} : ${todo[i]}`)
    }
  console.log('******************')
}else if(input==="new"){
        let newTodo= prompt("what do you like to add")
            todo.push(newTodo)
            console.log(`${newTodo} added to the list`)
        
    }else if(input==="delete"){
        let index=parseInt(prompt("what you like to delte"));
   if(index !== -1){
        todo.splice(index,1)
        console.log(`${index } is deleted`)
    }
    else{
        console.log(`${index} is not in the list`)
    }
}



    input=prompt("what do you want to do");
}

console.log("ok quit the game")