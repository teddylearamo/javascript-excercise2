// Variables
let travelerName = "Teddy";
let destination = "spain";
let month = "December";
let hasPassport = true;

// Anonymous function
let createTravelPlan = function(name, destination, month, hasPassport) {
    if (hasPassport) {
        return name + " can travel to " + destination + " in " + month;
    } else {
        return name + " cannot travel yet (no passport)";
    }
};

// Call function
let travelResult = createTravelPlan(travelerName, destination, month, hasPassport);

console.log(travelResult);