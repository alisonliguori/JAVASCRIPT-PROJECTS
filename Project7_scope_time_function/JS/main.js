var x =20; //Global variable
function Subtract_numbers_1() {
    document.write(50 - x + "<br>");
}

function Subtract_numbers_2() {
    document.write(x - 5 + "<br>");
}
// ^ Defining functions that use the global variable 'x'

//Calling the functions to demonstrate global variable usage
Subtract_numbers_1();
Subtract_numbers_2();


// Local variable example
function Add_numbers_1() {
    var y = 10; //Local variable
    document.write(y + 100 + "<br>");
}

Add_numbers_1();


// Intentional error 
function Add_numbers_2() {
    console.log(y + 100 + "<br>"); // This will cause an error because 'y' is not defined in this scope
}

Add_numbers_2();

function Add_numbers_3() {
    var y = 10; //Local variable
    console.log(y + 100 + "<br>");
}

Add_numbers_3();


// Get date function
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Get time function 
function getTime() {
    const now = new Date();
    const time = now.toLocaleTimeString(); // e.g., "11:59:32 AM"
    document.getElementById("time_result").innerHTML = "Current time: " + time;
}


//Else Statment function
function temperature_function(){
    temperature=document.getElementById("temperature").value;
    if (temperature >= 70){
        response="It's a nice day outside!";
    }
    else{
        response="It's either a bit chilly or cold!";
    }
    document.getElementById("temperature_result").innerHTML=response;
}


// Else If Statement function to respond based on user input
function animals_function(){
    animals=document.getElementById("animals").value;
    if (animals >= 8){
        response="You really love animals!";
    }
    else if (animals >=6){
        response="You like animals!";
    }
    else{
        response="You don't like animals.";
    }
    document.getElementById("animal_scale").innerHTML=response;
}
