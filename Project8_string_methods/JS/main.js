function full_sentence(){ //Concat method
    var part_1="I wish";
    var part_2=" I could";
    var part_3=" travel the";
    var part_4=" world and";
    var part_5=" photograph wildlife!";
    var whole_sentence= part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("concat").innerHTML= whole_sentence;
}

function slice(){ //Slice method
    var sentence="Being a wildlife photographer is my ultimate goal. However, it is nearly impossible! The field is overcrowded and I would need the best of the best camera! A girl can always dream...";
    var section= sentence.slice(155,180);
    document.getElementById("slice").innerHTML= section;

}

//UpperCase method
function upper_case(){
    let text="I am happiest photographing wildlife!";
    let result=text.toUpperCase();
    document.getElementById("upper_case").innerHTML= result;
}

//Search method
function search_method(){
    let text="I wish more people cared about wildlife conservation!  Wildlife is awesome!";
    let position=text.search("wildlife");
    document.getElementById("search").innerHTML= position;
}   

//Number to string method
function string_method(){
    let X= 2025;
    document.getElementById("string_number").innerHTML= X.toString();
}

//Precision method
function precision_method(){
    let X= 123456.7890;
    document.getElementById("precision").innerHTML= X.toPrecision(8);
}

//Fixed method
function toFixed(){
    let num= 100.99;
    let n= num.toFixed(3);
    document.getElementById("fixed").innerHTML= n;
}

//ValueOf method
function value_of(){
    let text= "Wildlife photography is the best!";
    let result= text;
    document.getElementById("value").innerHTML= result;
}