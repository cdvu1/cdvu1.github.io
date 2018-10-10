"use strict";

var ABOUT_ME_NAV = document.querySelector("#about-me-nav");
var PROJECTS_NAV = document.querySelector("#projects-nav");
var CONTENT = document.querySelector("#content");
var state = {
    navSelected: 1
}


function removeNavSelected() {
    CONTENT.innerHTML = "";
    PROJECTS_NAV.classList.remove("nav-selected");
    ABOUT_ME_NAV.classList.remove("nav-selected");
}

function displayAboutMe() {
    CONTENT.style.textAlign = "left";
    //introduction / bio / contact
    let rowDiv = document.createElement("div");
    //rowDiv.classList.add("row");
    rowDiv.classList.add("d-flex");

    let col1 = document.createElement("div");
    //col1.classList.add("col");
    col1.classList.add("flex-grow-1");

    let hello = document.createElement("h2");
    hello.innerText="WELCOME TO MY PAGE";
    let bio = document.createElement("div");
    bio.innerText = "Hello! My name is Cecilia! I am a developer with a great interest in web development. I simply enjoy being able to utilize my skills, the web and technology to display information and content. On my free time I love to run, play flag football, and eat Hot Cheetos.";
    
    col1.appendChild(hello);
    col1.appendChild(bio);

    let col2 = document.createElement("div");
    //col2.classList.add("col");

    let contact = document.createElement("h2");
    contact.innerText = "CONTACT";
    col2.appendChild(contact);

    let email = document.createElement("div");
    email.innerHTML = "<a href='mailto:cdvu@uw.edu'>cdvu@uw.edu</a>"
    col2.appendChild(email);

    let linkedIn = document.createElement("div");
    linkedIn.innerHTML = "<a href='https://www.linkedin.com/in/ceciliadvu/'>www.linkedin.com/in/ceciliadvu/</a>"
    col2.appendChild(linkedIn);
    col2.style.paddingLeft = "10px";

    rowDiv.appendChild(col1);
    rowDiv.appendChild(col2);

    CONTENT.appendChild(rowDiv);


    //education
    let education = document.createElement("h2");
    education.innerText = "EDUCATION";

    let schoolName = document.createElement("div");
    schoolName.innerText="UNIVERSITY OF WASHINGTON";
    schoolName.classList.add("school-name");

    let major = document.createElement("div");
    major.innerText="B.S. Informatics - 3.52 GPA";

    let gradDate = document.createElement("div");
    gradDate.innerText = "Graduation: June 2019";

    let relatedCourses = document.createElement("div");
    relatedCourses.innerText = "Related courses: Client-Side Web Development, Server-Side Web Development, Data Structures and Algorithms, Relational Database Management Systems, Scientific Computing (MATLAB)";

    CONTENT.appendChild(education);
    CONTENT.appendChild(schoolName);
    CONTENT.appendChild(major);
    CONTENT.appendChild(gradDate);
    CONTENT.appendChild(relatedCourses);
}

function displayProjects() {
    CONTENT.innerHTML = "";

    let card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("div");
    container.classList.add("hovereffect");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = "../img/boozefeed/bf1.png";

    card.addEventListener("click", () => {
        alert("hi");
    });

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let h2 = document.createElement("h2");
    h2.innerText = "BOOZEFEED";

    

    overlay.appendChild(h2);

    container.appendChild(cardImage);
    container.appendChild(overlay);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let descr = document.createElement("div");
    descr.innerText = "A web application that allows users to take, and create personality quizzes.";

    cardBody.appendChild(descr);

    card.appendChild(container);
    card.appendChild(cardBody);
    CONTENT.appendChild(card);
}

ABOUT_ME_NAV.classList.add("nav-selected");
displayAboutMe();

ABOUT_ME_NAV.addEventListener("click", function() {
    removeNavSelected();
    ABOUT_ME_NAV.classList.add("nav-selected");
    state.navSelected = 1;
    displayAboutMe();
});

PROJECTS_NAV.addEventListener("click", function() {
    removeNavSelected();
    PROJECTS_NAV.classList.add("nav-selected");
    state.navSelected = 2;
    displayProjects();
});