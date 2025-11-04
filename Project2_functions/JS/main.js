function myFunction() {
  var sentence = "I am still learning";
  sentence += "... and I still have a lot more to learn.";

  // Update the paragraph with the new sentence
  document.getElementById("test").innerHTML = sentence;
}

function javaFunction(p1,p2,p3){
//p's are parameters - placeholders
return p1 * p2 + p3;
}

let result=javaFunction(10,8,2);
document.getElementById("math").innerHTML=
"The result is: " + result;



document.getElementById("dom").innerHTML= "here is another example of using .getElementbyId()";