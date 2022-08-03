var temp = 86
function tempC() {
    var temp
    console.log(temp) // undefined
    var temp = 50
    temp = (temp - 32) / 1.8
    console.log(temp) // 10
}
tempC()
console.log(temp) // 86