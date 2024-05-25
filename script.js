var clicked = "false";
localStorage.setItem("clicked", clicked);

var clicked2 = "false";
localStorage.setItem("clicked2", clicked2);

var clicked3 = "false";
localStorage.setItem("clicked3", clicked3);

var clicked4 = "false";
localStorage.setItem("clicked4", clicked4);

var clicked5 = "false";
localStorage.setItem("clicked5", clicked5);


function signupfunction(){
    clicked = localStorage.getItem("clicked");
    clicked2 = localStorage.getItem("clicked2");
    clicked3 = localStorage.getItem("clicked3");
    clicked4 = localStorage.getItem("clicked4");
    clicked5 = localStorage.getItem("clicked5");

    if (clicked2 == "true"){
        loginfunction();
    }

    if (clicked3 == "true"){
        learnmorefunction();
    }

    if (clicked4 == "true"){
        aboutusfunction();
    }

    if (clicked5 == "true"){
        contactusfunction();
    }


    if (clicked == "false"){
        var pos = document.getElementById("signup-triangle");
        pos.classList.replace("triangle-down", "triangle-up");

        var form = document.getElementById("signupform");
        form.style.display = "block";

        var pos1 = document.getElementById("whole_sign-up");
        pos1.style.marginBottom = "25.5vw"; //edit this if the other buttons are too far/near from the sign up form

        clicked = "true";
        localStorage.setItem("clicked", clicked);
    }
    else{
        var pos = document.getElementById("signup-triangle");
        pos.classList.replace("triangle-up", "triangle-down");

        var form = document.getElementById("signupform");
        form.style.display = "none";

        var pos1 = document.getElementById("whole_sign-up");
        pos1.style.marginBottom = "0vw";

        clicked = "false";
        localStorage.setItem("clicked", clicked);
    }
}

function loginfunction(){
    clicked = localStorage.getItem("clicked");
    clicked2 = localStorage.getItem("clicked2");
    clicked3 = localStorage.getItem("clicked3");
    clicked4 = localStorage.getItem("clicked4");
    clicked5 = localStorage.getItem("clicked5");

    if (clicked == "true"){
        signupfunction();
    }

    if (clicked3 == "true"){
        learnmorefunction();
    }

    if (clicked4 == "true"){
        aboutusfunction();
    }

    if (clicked5 == "true"){
        contactusfunction();
    }

    if (clicked2 == "false"){
        var pos = document.getElementById("login-triangle");
        pos.classList.replace("triangle-down", "triangle-up");

        var form = document.getElementById("loginform");
        form.style.display = "block";

        var pos1 = document.getElementById("whole_log-in");
        pos1.style.marginBottom = "17vw"; //edit this if the other buttons are too far/near from the login form

        clicked2 = "true";
        localStorage.setItem("clicked2", clicked2);
    }
    else{
        var pos = document.getElementById("login-triangle");
        pos.classList.replace("triangle-up", "triangle-down");

        var form = document.getElementById("loginform");
        form.style.display = "none";

        var pos1 = document.getElementById("whole_log-in");
        pos1.style.marginBottom = "0vw";

        clicked2 = "false";
        localStorage.setItem("clicked2", clicked2);      
    }
}

function learnmorefunction(){
    clicked = localStorage.getItem("clicked");
    clicked2 = localStorage.getItem("clicked2");
    clicked3 = localStorage.getItem("clicked3");
    clicked4 = localStorage.getItem("clicked4");
    clicked5 = localStorage.getItem("clicked5");

    if (clicked == "true"){
        signupfunction();
    }

    if (clicked2 == "true"){
        loginfunction();
    }

    if (clicked4 == "true"){
        aboutusfunction();
    }

    if (clicked5 == "true"){
        contactusfunction();
    }

    if (clicked3 == "false"){
        var pos = document.getElementById("learnmore-triangle");
        pos.classList.replace("triangle-down", "triangle-up");

        var pos1 = document.getElementById("other-learn-more");
        pos1.style.display = "block";

        clicked3 = "true";
        localStorage.setItem("clicked3", clicked3);
    }
    else{
        var pos = document.getElementById("learnmore-triangle");
        pos.classList.replace("triangle-up", "triangle-down");

        var pos1 = document.getElementById("other-learn-more");
        pos1.style.display = "none";

        clicked3 = "false";
        localStorage.setItem("clicked3", clicked3);
    }
}

function aboutusfunction(){
    clicked = localStorage.getItem("clicked");
    clicked2 = localStorage.getItem("clicked2");
    clicked3 = localStorage.getItem("clicked3");
    clicked4 = localStorage.getItem("clicked4");
    clicked5 = localStorage.getItem("clicked5");

    if (clicked == "true"){
        signupfunction();
    }

    if (clicked2 == "true"){
        loginfunction();
    }

    if (clicked3 == "true"){
        learnmorefunction();
    }

    if (clicked5 == "true"){
        contactusfunction();
    }

    if (clicked4 == "false"){
        var pos = document.getElementById("aboutus-triangle");
        pos.classList.replace("triangle-down", "triangle-up");

        var pos1 = document.getElementById("other-about-us");
        pos1.style.display = "block";

        clicked4 = "true";
        localStorage.setItem("clicked4", clicked4);
    }
    else{
        var pos = document.getElementById("aboutus-triangle");
        pos.classList.replace("triangle-up", "triangle-down");

        var pos1 = document.getElementById("other-about-us");
        pos1.style.display = "none";

        clicked4 = "false";
        localStorage.setItem("clicked4", clicked4);
    }
}

function contactusfunction(){
    clicked = localStorage.getItem("clicked");
    clicked2 = localStorage.getItem("clicked2");
    clicked3 = localStorage.getItem("clicked3");
    clicked4 = localStorage.getItem("clicked4");
    clicked5 = localStorage.getItem("clicked5");

    if (clicked == "true"){
        signupfunction();
    }

    if (clicked2 == "true"){
        loginfunction();
    }

    if (clicked3 == "true"){
        learnmorefunction();
    }

    if (clicked4 == "true"){
        aboutusfunction();
    }

    if (clicked5 == "false"){
        var pos = document.getElementById("contactus-triangle");
        pos.classList.replace("triangle-down", "triangle-up");

        var pos1 = document.getElementById("other-contact-us");
        pos1.style.display = "block";

        clicked5 = "true";
        localStorage.setItem("clicked5", clicked5);
    }
    else{
        var pos = document.getElementById("contactus-triangle");
        pos.classList.replace("triangle-up", "triangle-down");

        var pos1 = document.getElementById("other-contact-us");
        pos1.style.display = "none";

        clicked5 = "false";
        localStorage.setItem("clicked5", clicked5);
    }
}