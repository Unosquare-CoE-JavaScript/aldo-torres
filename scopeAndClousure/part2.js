/*
    You will pass one or more values (as arguments) intotog-gle(..), and get back a function. 
    That returned function willalternate/rotate between all the passed-in values in order, oneat a time, as it’s called repeatedly.
*/

function toggle(...data) {
    var current = "";

    // Returns the function
    return function () {
        // Check if the current variable has a value
        if(!current) {
            current = data[0];
        }
        // Send the current value (first on the array) to the end of the array
        data.push(current);
        // Remove the first value of the array and assing the value to current
        current = data.shift();
        return current;
    }
}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

console.log(hello());    // "hello"
console.log(hello());    // "hello"

console.log(onOff());    // "on"
console.log(onOff());    // "off"
console.log(onOff());    // "on"

console.log(speed());    // "slow"
console.log(speed());    // "medium"
console.log(speed());    // "fast"
console.log(speed());    // "slow"