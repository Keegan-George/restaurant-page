import "./styles.css";
import { home, menu, about, clearContent } from "./scripts.js";

home();

const routes = {
    home,
    menu,
    about
}

const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    const navButton = event.target.closest("button");
    if (!navButton) { return; }

    const page = navButton.dataset.page;

    clearContent();
    routes[page]();
});