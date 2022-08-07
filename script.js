function myObject () {
    let myValue = 1;
    return {
        display: () => console.log(myValue),
        increment: () => myValue++
    }
}