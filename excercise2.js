function createLearnerSummary() {

    function getName() {
        return "Teddy";
    }

    function getAge() {
        return 22;
    }

    function getLanguage() {
        return "JavaScript";
    }

    function getCity() {
        return "Nairobi";
    }

    let name = getName();
    let age = getAge();
    let language = getLanguage();
    let city = getCity();

    let learnerType;

    if (age >= 18) {
        learnerType = "adult learner";
    } else {
        learnerType = "young learner";
    }

    return name + " is an " + learnerType + " from " + city + " who loves " + language;
}

let summary = createLearnerSummary();
console.log(summary);