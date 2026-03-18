import { home, about } from "./scripts.js";

home();

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    const navButton = event.target.closest("button");

    if (!navButton) { return; }

    const buttonClasses = navButton.classList;


    if (buttonClasses.contains("home")) {
        home()
    }
    else if (buttonClasses.contains("about")) {
        about();
    }
});