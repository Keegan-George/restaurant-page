import "./styles.css";
import { home, menu, about, clearContent } from "./scripts.js";

/**
 * An object that maps route names to their corresponding page‑rendering functions.
 * @type {{ home: Function, menu: Function, about: Function }}
 */
const routes = {
    home,
    menu,
    about
}

loadPage("home");

/**
 * Handles navigation clicks and loads the appropriate page.
 *
 * @event click
 * @param {MouseEvent} event - The click event triggered on the navigation bar.
 */
const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
    const navButton = event.target.closest("button");
    if (!navButton) { return; }

    const page = navButton.dataset.page;

    loadPage(page);
});

/**
 * Loads the specified page by name.
 * Clears existing content and renders the new page.
 *
 * @function loadPage
 * @param {string} page - The key of the page to load (e.g., "home", "menu", "about").
 */
function loadPage(page) {
    clearContent();
    routes[page]();
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-page="${page}"]`).classList.add("active");
}

