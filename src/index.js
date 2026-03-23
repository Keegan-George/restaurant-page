import "./styles.css";
import { home, menu, about, clearContent } from "./scripts.js";

const routes = {
    home,
    menu,
    about
}

home();

const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    const navButton = event.target.closest("button");
    if (!navButton) { return; }

    const page = navButton.dataset.page;

    clearContent();
    routes[page]();

    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    navButton.classList.add("active");
});