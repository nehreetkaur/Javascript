const person={
    firstname:"shiva",
    lastname:"pandya",
    feature:"handsome"
}


const {firstname,...rest}=person;
console.log(rest);
console.log(firstname)
