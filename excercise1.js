// Variables
let studentName = "Teddy";
let age = 20;
let country = "Kenya";
let course = "JavaScript";
let hasPaidFees = true;

// Function
function checkEligibility(name, age, country, course, hasPaidFees) {
    if (age >= 18 && hasPaidFees === true) {
        return name + " is eligible to join the " + course + " course.";
    } else {
        return name + " is NOT eligible to join the course.";
    }
}

// Call function
let result = checkEligibility(studentName, age, country, course, hasPaidFees);
console.log(result);