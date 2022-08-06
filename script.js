let speak = function(what) {
  return (console.log(what));
}
  
let Dog = function() {
  let name;
}

Dog.prototype.speak = speak
let firstDog = new Dog;

firstDog.name = "Mojo"
firstDog.speak('woof')
