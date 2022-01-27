/*
    The range(..) function takes a number as its firstargument,representing the first number in a desired range of numbers.
    The second argument is also a number representing the end of the desired range (inclusive). 
    If the second argument is omit-ted, then another function should be returned that expectsthat argument.   
*/

function range(start, end) {

    function getRange(end) {
        var arr = [];
        // the value of start is taken from range() scope (clousere)
        for (let i = start; i < end + 1; i++) {
            // same with start, arr (array) is from getRange() scope
            arr.push(i);
        }
        return arr;
    }

    return end == undefined ? getRange : getRange(end);
}

console.log(range(3,3)); // [3]
console.log(range(3,8)); // [3,4,5,6,7,8]
console.log(range(3,0)); // []

// start3 and start4 are calling the innerFunction but this function still can accsess to the outerVariable, in this case start (clousere)
var start3 = range(3);
var start4 = range(4);

console.log(start3(3)); // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
console.log(start4(6)); // [4,5,6]