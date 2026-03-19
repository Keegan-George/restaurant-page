import { home, about, menu } from "./scripts.js";

home();

const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    const navButton = event.target.closest("button");

    if (!navButton) { return; }

    const buttonClasses = navButton.classList;

    if (buttonClasses.contains("home")) {
        home();
    }
    else if (buttonClasses.contains("menu")) {
        menu();
    }
    else if (buttonClasses.contains("about")) {
        about();
    }
});