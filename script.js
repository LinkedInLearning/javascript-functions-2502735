function myObject () {
    let myValue = 1;
    return {
        display: () => console.log(myValue),
        increment: () => myValue++
    }
}

var mything = myObject();
    mything.display();
    mything.increment();
    mything.display();
var other = myObject();
    other.display();
    other.increment();
