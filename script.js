let speak = function(what) {
  return (console.log(what));
}
  
let Dog = function() {
  let name;
}

let Cat = function() {
  let name;
}

Dog.prototype.speak = speak
Cat.prototype.speak = speak

let myDog = new Dog;
let myCat = new Cat;

myDog.name = "Mojo"
myDog.speak('woof')

myCat.name = "Sniggles"
myCat.speak('meow')