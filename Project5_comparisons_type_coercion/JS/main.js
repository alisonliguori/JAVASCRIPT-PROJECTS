// Type of operator 
// document.write(typeof "word");
document.write(typeof 10);
document.write("<br>"); //line break

document.write("10"+90);
document.write("<br>");




//function Not a Number...true then false
function my_function(){
    document.getElementById("number").innerHTML=isNaN("Hello world!") + "<br>" + isNaN("123");
}

document.write("<br>");
document.write(-4E200); // - infinity
document.write("<br>");
document.write(5E293); // + infinity


//Boolean assignment
document.write("<br>");
document.write(420>69) //true
document.write("<br>");
document.write(420>690) //false

//Console log
console.log(54+46); //addition
console.log(54<46); //false
document.write("<br>");


// (2) == (are they the same?)
document.write("<br>");
document.write(365==365) //true
document.write("<br>");
document.write(365==180) //false
document.write("<br>");


// (3) === (are they EXACTLY the same? (values & type)

//Return true by ensuring to match the data type and value.
A="Hello";
B="Hello";
document.write(A===B);
document.write("<br>");

//Return false by writing a different data type and different value.
B="Hello";
D=28;
document.write(B===D);
document.write("<br>");

//Return false by writing a different data type but the same value for both.
D=28;
E="twenty eight";
document.write(D==E);
document.write("<br>");


//Return false by writing the same data type but a different value for both.
F=100;
G=1000;
document.write(F===G);

document.write("<br>");

// utilize the AND operator to display true and false.
document.write(200>20 && 500>50); //true
document.write("<br>");

document.write(2>20 && 5>50); //false
document.write("<br>");
//Utilize the OR operator to display true and false. 
document.write(14>15 || 85>80); //true
// to use || hit shift & \ at the same time 
document.write("<br>");
document.write(14>151 || 85>803); //false

document.write("<br>");

//not function
function not_function(){
    document.getElementById("not").innerHTML=!(34>7) //false
    + "<br>" + !(1>2); //true
}