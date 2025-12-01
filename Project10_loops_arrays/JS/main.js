// String Length
// Length property to return the length of a string

let text = "I really hope I can build more beautiful websites someday!";
let length = text.length;

document.getElementById("string").innerHTML = length;


// For loop
// Repeatedly executes instructions as long as a particular condition is true.

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
// Array (instruments). Holds 7 strings (each 1 a musical instrument)
var content = ""; // Start with an empty string
var y; // Declare variable y.  y is used to count through the array elements
function for_Loop() {
    for (y = 0; y < instruments.length; y++) { //start at 0, keep looping while y is < the length of the array (7), increase y by 1 each loop
        content += instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// Array
// An array is a special variable, which can hold more than one value
function wildlife_pics() {
    // Create an array of wildlife names
    var Wildlife = ["eagle", "snake", "crab"];

    // Header message
    let content = "Here are a few wildlife photos I've taken:<br><br>";

    // Loop through each item in the array
    for (let i = 0; i < Wildlife.length; i++) { // Keep looping when i < the length of 3 
        // Add the name (eagle, snake, crab)
        content += Wildlife[i] + "<br>";
        // Add the image, using the array value to build the filename
        // Add the image using the filename directly
        content += "<img src='../images/eagle.JPG' alt='eagle' width='300'><br><br>";
        content += "<img src='../images/gart.JPG' alt='snake' width='300'><br><br>";
        content += "<img src='../images/fiddler.JPG' alt='crab' width='300'><br><br>";
    }
        // Inject the final content into the page
        document.getElementById("Wildlife").innerHTML = content;
}


// Constant
// A constant is a type of variable that cannot be reassigned after its initial assignment.
// But if the value is an object/array I can change its contents
function constant_function() {
    const Camera = {type:"Nikon", model:"D7500", color:"Black"};
    Camera.color = "forrest green"; // can change the property of the object
    Camera.model = "Z8"; // can change the property of the object
    document.getElementById("Constant").innerHTML = "My dream camera model the a " + 
        Camera.model + " and the color is " + Camera.color;
}

// Let keyword
// The let keyword declares a block scope local variable, optionally initializing it to a value.
function let_function() {
    let X = 10;
    document.write("<br>" + X);
    {
        let X = 20; // different variable, only exists in this block
        document.write("<br>" + X);
    }   
    document.write("<br>" + X);
}

// Return statement
function return_function(name) {
    return "The next huge purchase I plan on making is a " + name;
}
function showReturn() {
    document.getElementById("Return").innerHTML = return_function("Nikon Z8") 
}

// Break Statement is used to immediatly exit a loop or a switch block
// (A switch block is just the computer saying: “I have one thing. Depending on what that thing is, I’ll do something different")
// When it encounters a break, it stops current loop execution and jumps to the 
// code following the loop.
// It is used when you want to stop looping once a certain condition is met, even 
// if the loop would normally continue.

let text2 = "";

for (let z=5; z<20; z++) {
    if (z===15) {break;}
    text2 += "The number is " + z + "<br>";
}

document.getElementById("Break_Statement").innerHTML = text2;

// Continue Statement - skips the current iteration in a loop.
// The remaining code in the iteration is skipped and processing moves to the next iteration.'

let text3 = "";
for (let f=2; f<10; f++) {
    if (f===7) {continue;}
    text3 += "The number is " + f + "<br>";
}

document.getElementById("Continue_Statement").innerHTML = text3;

//While loop
let count = " ";
let q=0;
while (q<10) {
    count += "The count is " + q + "<br>";
    q++;
}

document.getElementById("While_Loop").innerHTML = count;