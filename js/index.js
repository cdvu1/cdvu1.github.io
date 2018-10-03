"use strict";

var ABOUT_ME_NAV = document.querySelector("#about-me-nav");
var PROJECTS_NAV = document.querySelector("#projects-nav");
var CONTENT = document.querySelector("#content");
var state = {
    navSelected: 1
}


function removeNavSelected() {
    PROJECTS_NAV.classList.remove("nav-selected");
    ABOUT_ME_NAV.classList.remove("nav-selected");
}

function displayAboutMe() {
    CONTENT.innerHTML = "ABOUT ME";
}

function displayProjects() {
    CONTENT.innerHTML = "projects";
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