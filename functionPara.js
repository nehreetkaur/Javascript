


function sayhello(id,greeting){
    greeting();
}


function hello(){
    console.log("Hello");
}


sayhello(1,hello);