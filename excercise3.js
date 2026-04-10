// Function using console.log
function showClubName() {
    console.log("Chess Club");
}

// Function using return
function getClubName() {
    return "monty's Chess Club";
}

// Store results
let club1 = showClubName();   // undefined
let club2 = getClubName();    // actual value

console.log(club1);
console.log(club2);

// Function with condition
function createClubMessage(clubName, meetingDay, isOpen) {
    if (isOpen) {
        return clubName + " meets on " + meetingDay;
    } else {
        return clubName + " is currently closed";
    }
}

let message = createClubMessage("monty's chess Club", "Friday", true);
console.log(message);