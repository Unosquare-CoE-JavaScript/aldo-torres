"use strict";

//First, add the setTimeout code as shown in the intro to this exercise. Then modify the code by creating a promise so that the code can run asynchronously.

const massiveProcess = function(num) {
    return new Promise((res, rej) => {
        if (isNaN(num)) {
            rej("Not a number")
        } else {
            let result = 0; 
            setTimeout(function() {
                for (let i = num ** 7; i >= 0; i--) {        
                    result += Math.atan(i) * Math.tan(i);
                };
                res(result);
            }, 0);
        }
    })
    
};

// let amt = massiveProcess(10);

// console.log("The number is: " + amt);

massiveProcess(10)
.then(amt => console.log("The number is: " + amt))
.catch(err => console.log(err));

//More processing later on
console.log(5 * 5 + 100);