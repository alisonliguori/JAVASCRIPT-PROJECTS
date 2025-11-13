// Function using a ternary operator to determine ride eligibility
function Ride_Function() {
    var Height, Can_Ride;  // Declare variables
    Height = document.getElementById("Height").value; // Get user input for height
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough"; // Ternary operator
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."; // Display result
}  

// Function using a ternary operator to determine voting eligibility
function Vote_Function() {
    var Age, Can_Vote; // Declare variables
    Age = document.getElementById("Age").value;  // Get user input for age
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough"; // Ternary operator
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote."; // Display result
}

// Constructor function for Vehicle objects
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create Vehicle objects using constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Ali = new Vehicle("Toyota", "Rav4", 2025, "Cream");

// Display Erik's vehicle information
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

// Display Ali's vehicle information
function myCar() {
    document.getElementById("New_and_This").innerHTML =
        "I drive a " + Ali.Vehicle_Color + "-colored " + Ali.Vehicle_Model +
        " manufactured in " + Ali.Vehicle_Year;
}

// Assign a variable the value of a reserved word
var reservedWord = "class";
document.getElementById("ReservedWordOutput").innerHTML = "Reserved word used: " + reservedWord;

// Constructor function to create Dog objects   
function Dog(first, age, size, breed) {
    this.firstname = first;
    this.age = age;
    this.size = size;
    this.breed = breed;
}

// Create dog object
const myDog = new Dog("Charlie", 7, "Medium", "Mixed");

// Display dog breed information
document.getElementById("breed").innerHTML =
    "My dog's breed is: " + myDog.breed + ".";

// Nested function example
function greetUser() {
    function getGreeting() {
        return "Hello";
    }
    function getName() {
        return "Ali";
    }
    return getGreeting() + ", " + getName() + "!";
}

// display the result of the nested function
document.getElementById("NestedOutput").innerHTML = greetUser();