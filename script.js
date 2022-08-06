let speak = function(what) {
  return (console.log(what));
}
  
let Dog = function() {
  let name;
}

Dog.prototype.speak = speak
let myDog = new Dog;

myDog.name = "Mojo"
myDog.speak('woof')
