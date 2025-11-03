var A ="Welcome to my first string!"; //Defines variable A
document.write(A); //Write in web page variable A
window.alert(A); //Alert pops up with A (message)

document.write("<br> <br>") //line breaks

document.write(`I love wildlife photography! <br>  My favorite photography quote is:<br>
"Every moment in nature tells a story. As a nature photographer, I aim to freeze these moments in time.
I marvel at the world around us and thrive to do justice to its beauty."<br>
– Simon d'Entremont`); //Writes this in web page

document.write("<br> <br>")//line breaks

document.write ("I wish I could upgrade my photography set up!"
+ "to a Nikon Z8"+"that is my dream camera!");

document.write("<br> <br>")//line breaks

var B ="Being rich would make everyones lives easier!" + "I hope my stocks fly high!"
+ "Then I can buy my Z8"+"!" //Concatenating a string
document.write(B)


document.write("<br> <br>")//line breaks

var Coolfrogs= "Best Hoppers", smol="Spring peepers", medium="Whites tree frog", large="African Bullfrog";
document.write(large); //Assigning multiple variables in one statement ^ then declares African Bull frog

document.write("<br> <br>")//line breaks

document.write(2+2); //2+2 = 4 web pg will just show 4 
//expression

document.write("<br> <br>") //line breaks

var sent1="I am anxious about my future."
document.write("<br> <br>") //line breaks

var sent2="I just want to be happy."
document.write(sent1, "<br>",  sent2)

document.write("<br> <br>") //line breaks

document.write(10*10) //10*10=100 web pg will print 100

document.write("<br> <br>") //line breaks

function showMessage(){
    var str="Thanks for clicking me!";
    document.getElementById("text").innerHTML=str;
}