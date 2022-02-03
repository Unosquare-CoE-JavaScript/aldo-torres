/*
    scheduleMeeting(..) should take a start time (in 24-hour format as a string “hh:mm”) and a meeting duration (number of minutes). 
    It should return true if the meeting falls entirely within the work day (according to the times specified in dayStart and dayEnd); 
    return false if the meeting violates the work day bounds.    
*/

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    // Function that return the hour in minutes
    function toMinutes(hour) {
        let time = hour.split(':');
        // time[0] (string) is changed to number to be miltiply by 60 (coercion) 
        // but time[1] (string) needs an explicit coerecion 
        let minutes = time[0] * 60 + Number(time[1]);

        //return the hour in minutes
        return minutes;
    }

    return toMinutes(startTime) >= toMinutes(dayStart) && toMinutes(startTime) + durationMinutes <= toMinutes(dayEnd);
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false