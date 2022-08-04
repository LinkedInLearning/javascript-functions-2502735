function counter() {
  let number = 1
  return function() {
    console.log(number++)
  }
}
let steps = counter();
steps() // 1
steps() // 2