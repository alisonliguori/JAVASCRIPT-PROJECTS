function my_Dictionary() { //dictionary creation
    var Book={ //key:value
        title:"The Sword of Kaigen",
        author:"M.L Wang",
        year:"2019",
        genre:"Fantasy fiction, action, adult",
        type:"Stand alone",
        rating:"10/10",
        rating:"100/10", //duplicate,
        share:"yes"
    };
    delete Book.share; //delete value. no longer exists
    document.getElementById("Dictionary").innerHTML=Book.share; //since delete comment will show as undefined
}