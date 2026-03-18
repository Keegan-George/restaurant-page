import donutImg from "./donut.jpg";

const content = document.querySelector("#content");

function home() {
    content.textContent = "";

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
    blurb.textContent = `Artisanal donuts handcrafted by highly trained pastry chefs. Savour never before tasted flavors unlike 
    anything you have ever experienced before.`;

    content.appendChild(hero);
    content.appendChild(blurb);
}

function about() {
    content.textContent = "";

    const history = document.createElement("section");
    history.classList.add("history");
    history.textContent = `Established in 1923, in [city], [country], [company name] has grown from
     a quaint mom and pop shop to multiple locations across North America. With more than 50 unique flavours, 
     and new creations being added regularly, these hand made doughnuts offer something for everyone. Come visit us! `
    content.appendChild(history);

    const storeHours = document.createElement("section");
    storeHours.classList.add("store-hours");
    storeHours.textContent = "Open Hours: Tuesday to Saturday: 10:00am - 6:00pm";
    content.appendChild(storeHours);

    const address = document.createElement("section");
    address.classList.add("address");
    address.textContent = "1234 blah blah street, City, State H13124";
    content.appendChild(address);
}



export { home, about };