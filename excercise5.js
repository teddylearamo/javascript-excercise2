// Arrow function
const createProfile = (name, age, country, favoriteFood, isStudent) => {
    if (isStudent) {
        return name + " is a student, " + age + " years old from " + country + " who loves " + favoriteFood;
    } else {
        return name + " is not a student, " + age + " years old from " + country + " who loves " + favoriteFood;
    }
};

// Call function for two people
let profile1 = createProfile("Teddy", 22, "Kenya", "Pizza", true);
let profile2 = createProfile("John", 30, "USA", "Burger", false);

// Print results
console.log(profile1);
console.log(profile2);