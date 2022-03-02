function person(){
    console.log(arguments.callee.name);    // this will display the function name;
}

person()


// with the constructor method;

function Person(){
    console.log(this.constructor.name);
}

let p= new person();
console.log(p.constructor.name);