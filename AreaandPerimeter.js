function circle(radius){

  this.radius=radius;

  this.area=function(){
      return Math.PI*this.radius*this.radius;
  }

  this.perimeter=function(){
      return 2*Math.PI*this.radius;

  }

}

let result= new circle(3);
console.log(result.area().toFixed(3));
console.log(result.perimeter().toFixed(2));
