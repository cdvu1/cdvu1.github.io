"use strict";

var ABOUT_ME_NAV = document.querySelector("#about-me-nav");
var PROJECTS_NAV = document.querySelector("#projects-nav");
var CONTENT = document.querySelector("#content");
var state = {
    navSelected: 1
}


function removeNavSelected() {
    CONTENT.innerHTML = "";
    CONTENT.classList.remove("d-flex")
    PROJECTS_NAV.classList.remove("nav-selected");
    ABOUT_ME_NAV.classList.remove("nav-selected");
}

function displayAboutMe() {
    CONTENT.style.textAlign = "left";
    //introduction / bio / contact
    let bioDiv = document.createElement("div");

    let hello = document.createElement("h2");
    hello.innerText="WELCOME TO MY PAGE";
    let bio = document.createElement("div");
    bio.innerHTML = "Hello! I am currently an Informatics student at the University of Washington with great interests in web development with experiences building full stack web applications. I enjoy being able to use the power of the web to build applications to enlighten users or make their lives easier. <br><br> I am a very hardworking, self-motivated and optimistic individual and I hope to be able to give back to low-income and underrepresented communities by giving the younger generation exposure to technology. <br><br>In my free time, I love to buy shoes and stay active with working out, running, wrestling, and playing flag football. I also have a Hot Cheeto eating addiction!<br><br>Please feel free to reach out to me with any opportunities available!";
    
    bioDiv.appendChild(hello);
    bioDiv.appendChild(bio);
    CONTENT.appendChild(bioDiv);

    let rowDiv = document.createElement("div");
    rowDiv.classList.add("d-flex");
    //education
    let col1 = document.createElement("div");
    col1.classList.add("flex-grow-1");

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

    col1.appendChild(education);
    col1.appendChild(schoolName);
    col1.appendChild(major);
    col1.appendChild(gradDate);
    col1.appendChild(relatedCourses);

    //contact
    let col2 = document.createElement("div");

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
}

function displayProjects() {
    CONTENT.innerHTML = "";
    CONTENT.classList.add("d-flex");
    CONTENT.classList.add("justify-content-between");
    let boozefeed = {
        image: "../img/projects/boozefeed.png",
        title: "BOOZEFEED",
        description: "A web application built with React that allows users to take, and create personality quizzes.",
        link: "https://bit.ly/boozefeed"
    }
    createProjectCard(boozefeed);
    //createProjectCard("../img/projects/boozefeed.png", "BOOZEFEED", "A web application that allows users to take, and create personality quizzes.", "https://bit.ly/boozefeed")

    let shiny = {
        image: "../img/projects/svggame.png",
        title: "SVG GAME",
        description: "A Javascript application game where randomly placed svgs must be collected",
        link: "http://ceciliadvu.com/svg-game"
    }
    createProjectCard(shiny);
}

function createProjectCard(project) {
    let card = document.createElement("div");
    card.classList.add("card");

    let container = document.createElement("div");
    container.classList.add("hovereffect");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = project.image;

    card.addEventListener("click", () => {
        window.open(project.link);
    });

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let h2 = document.createElement("h2");
    h2.innerText = project.title;

    overlay.appendChild(h2);

    container.appendChild(cardImage);
    container.appendChild(overlay);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let descr = document.createElement("div");
    descr.innerText = project.description;

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