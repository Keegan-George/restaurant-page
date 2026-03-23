import "./styles.css";
import { home, menu, about, clearContent } from "./scripts.js";

const routes = {
    home,
    menu,
    about
}

loadPage("home");

const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    const navButton = event.target.closest("button");
    if (!navButton) { return; }

    const page = navButton.dataset.page;

    loadPage(page);
});

function loadPage(page) {
    clearContent();
    routes[page]();
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-page="${page}"]`).classList.add("active");
}

