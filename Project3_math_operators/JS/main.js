// Math

function addition_Function() {
    var addition = 100 + 4;
    document.getElementById("add").innerHTML = "100+4 =" + addition;
}

function subtraction_Function() {
    var subtraction = 98 - 4
    document.getElementById("sub").innerHTML = "98-4 =" + subtraction;
}

function multiply_Function() {
    var multiplication = 8 * 8
    document.getElementById("multiply").innerHTML = "8*8 =" + multiplication;
}
function division_Function() {
    var division = 70 / 3
    document.getElementById("divide").innerHTML = "70/3 =" + division;
}

// more_math can use all the operators
function more_Math() {
    var simple_Math = (70 / 3) + 5 - 10 * 3
    document.getElementById("math").innerHTML = "(70/3)+5-10*3 =" + simple_Math;
}

// modulus_operator = remainder operator
function modulus_operator() {
    var simple_Math = 100 % 4
    document.getElementById("modulus").innerHTML = "When you divide 100 by 4 you have a remainer of:" + simple_Math;
}

// unary = negation operator
function negation_operator() {
    var x = 15;
    document.getElementById("negation").innerHTML = -x;
}


//increment
let a=3;
let b=++a

document.getElementById("increment").innerHTML="It is... " + b;

//decrement
let c=7;
let d=--c;

document.getElementById("decrement").innerHTML="It is... " + d;


//random #
f=Math.random()*(700-40); //# between 40 and 700
document.getElementById("random").innerHTML = "Your random Number is: " + f;

//Math round
document.getElementById("round").innerHTML=
Math.round(9.1);