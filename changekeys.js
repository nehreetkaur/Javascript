// let person={
// names: "spiderman",
// names: "Thor",
// names :"Ironman",
// names :"wonderwoman"
// }

let person = {
  firstName: "Peter", // always use for in loop for iteration of objects not for loop
  lastName: "Doe",
  employeeId: 1,
};

// display of object
console.log(person);

// adding new properties
console.log(Object.keys(person));
console.log(Object.entries(person));

// if we want to delete it
// delete person.lastName;
