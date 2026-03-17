import donutImg from "./donut.jpg";

const home = (() => {
    const content = document.querySelector("#content");

    const hero = document.createElement("figure");

    const heroImage = document.createElement("img");
    heroImage.src = donutImg;
    heroImage.alrt = "donut with dripping pink frosting";
    heroImage.width = "300"
    heroImage.height = "300";
    hero.appendChild(heroImage);

    const headline = document.createElement("section");
    headline.classList.add("headline");
    headline.textContent = "The best donuts in town!";
    hero.appendChild(headline);

    const blurb = document.createElement("section");
    blurb.classList.add("blurb");
    blurb.textContent = "Artisanal donuts handcrafted by highly trained pastry chefs. Savour never before tasted flavors unlike anything you have ever experienced before.";

    content.appendChild(hero);
    content.appendChild(blurb);
})();

export { home };