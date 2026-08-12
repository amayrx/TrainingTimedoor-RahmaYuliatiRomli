// Meeting 7 - For Loop
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

let gameHours = [2, 2, 3, 3, 1, 4, 5];

let timeLimit = 2;
let totalTime = 0;
let exceededTimes = 0;

let output = "";

// Calculate total game time
// and count how many times Steve exceeded the limit
for (let i = 0; i < gameHours.length; i++) {

    totalTime += gameHours[i];

    if (gameHours[i] > timeLimit) {
        exceededTimes++;
    }

    output += days[i] + ": " + gameHours[i] + " hours<br>";
}

// Display result
output += "<br>";
output += "Total time spent playing: " + totalTime + " hours<br>";
output += "Number of times exceeded the limit: " + exceededTimes;

document.getElementById("result").innerHTML = output;
