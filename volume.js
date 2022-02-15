// we solve by making a class

// volume= pie*r*r*h;
// radius= diameter/2;

// function Cylinder(dia,height){
//     this.dia=dia;
//     this.height=height;
// }

// Cylinder.prototype.Volume=function(){
//     let r=this.dia/2;
//     return Math.PI *r*r*this.height; 
// }

// let result= new Cylinder(7,4);
// console.log(result.Volume().toFixed(4));

// function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
//   }
  
//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return  Math.PI * radius * radius*this.cyl_height ;
//   };
  
//   var cyl = new Cylinder(7, 4);
//   // Volume of the cylinder with four decimal places.
//   console.log('volume =', cyl.Volume().toFixed(4));

  function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }

Cylinder.prototype.Volume=function(){
    let radius= this.cyl_diameter/ 2;
    return Math.PI * radius * radius * this.cyl_height ;
}
  

let result= new Cylinder(7,4)
console.log(result.Volume().toFixed(3))