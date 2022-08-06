let Dog = function() {
  let name;
}
Dog.prototype = {
  speak: function(what) {
    return (console.log(what));
  }
}
let firstDog = new Dog;
firstDog.name = "Mojo"
firstDog.speak('woof')
