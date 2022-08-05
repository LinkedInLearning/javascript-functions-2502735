function add(...theArgs) {
  let argSum = theArgs.reduce((sum, val) => sum + val)
  return argSum;
}
output = add(1,2,3,4,5);
console.log(output) //15