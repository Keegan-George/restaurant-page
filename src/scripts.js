import donutsImg from "./donuts-hero.jpg";
import donutDisplayImg from "./donut-display.jpg";

const content = document.querySelector("#content");

const siteContent = {
    homeDescription: ["Hand-crafted doughnuts made with obsession-level attention to detail",
        "From inventive glazes to bold, unexpected flavour combinations, every bite is designed to surprise, delight, and leave you craving the next one.",
        "Indulgence starts here."].join(" "),
    historyP1: ["Founded in the bustling streets of Crumbleton, Glaze of Glory began as the one-person dream of a baker who believed life is simply bettor with doughnuts",
        "Armed with a rolling pin, a tiny storefront, and a knack for bold flavours, they quickly turned a small neighbourhood shop into the talk of the town."].join(" "),
    historyP2: ["Fast-forward to today and our dough has stretched far — with multiple locations across North America, more than 50 flavours, and new ideas always rising in the kitchen",
        "Whether you're into classics, wild creations, or something in between, we've got a treat that'll make your day a hole lot sweeter."].join(" "),
}

function home() {
    const hero = document.createElement("section");
    hero.classList.add("hero");
    content.appendChild(hero);

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");
    hero.appendChild(heroText);

    const title = document.createElement("h1");
    title.classList.add("hero-title");
    title.textContent = "Glaze of Glory";
    heroText.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("hero-description");
    description.textContent = siteContent.homeDescription;
    heroText.appendChild(description);

    const orderNowButton = document.createElement("button");
    orderNowButton.classList.add("btn", "order-now");
    orderNowButton.textContent = "Order Now";
    heroText.appendChild(orderNowButton);

    const heroImage = document.createElement("img");
    heroImage.classList.add("hero-img");
    heroImage.src = donutsImg;
    heroImage.alt = "Three donuts on light blue background";
    hero.appendChild(heroImage);
}

function menu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    content.appendChild(menuContainer);

    const donuts = document.createElement("section");
    donuts.classList.add("donuts");
    menuContainer.appendChild(donuts);

    const donutTitle = document.createElement("h2");
    donutTitle.classList.add("donut-title");
    donutTitle.textContent = "Donuts";
    donuts.appendChild(donutTitle);

    const donutList = document.createElement("ul");
    donutList.classList.add("donut-list");
    donuts.appendChild(donutList);

    donutList.appendChild(createMenuItem("1", "$4.50"));
    donutList.appendChild(createMenuItem("6", "$22.00"));
    donutList.appendChild(createMenuItem("12", "$43.00"));

    const milkshakes = document.createElement("section");
    milkshakes.classList.add("milkshakes");
    menuContainer.appendChild(milkshakes);

    const milkshakeTitle = document.createElement("h2");
    milkshakeTitle.classList.add("milkshake-title");
    milkshakeTitle.textContent = "Milkshakes";
    milkshakes.appendChild(milkshakeTitle);

    const milkshakeList = document.createElement("ul");
    milkshakeList.classList.add("milkshake-list");
    milkshakes.appendChild(milkshakeList);

    milkshakeList.appendChild(createMenuItem("small", "$3.35"));
    milkshakeList.appendChild(createMenuItem("medium", "$5.50"));
    milkshakeList.appendChild(createMenuItem("large", "$7.25"));

    const drinks = document.createElement("section");
    drinks.classList.add("drinks");
    menuContainer.appendChild(drinks);

    const drinksTitle = document.createElement("h2");
    drinksTitle.classList.add("drinks-title");
    drinksTitle.textContent = "Drinks";
    drinks.appendChild(drinksTitle);

    const drinksList = document.createElement("ul");
    drinksList.classList.add("drinks-list");
    drinks.appendChild(drinksList);

    drinksList.appendChild(createMenuItem("tea", "$1.65"));
    drinksList.appendChild(createMenuItem("coffee", "$2.25"));
    drinksList.appendChild(createMenuItem("juice", "$3.15"));
    drinksList.appendChild(createMenuItem("espresso", "$3.55"));
    drinksList.appendChild(createMenuItem("latte", "$4.25"));
}

function about() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    content.appendChild(aboutContainer);

    const donutDisplay = document.createElement("img");
    donutDisplay.classList.add("donut-display-img");
    donutDisplay.src = donutDisplayImg;
    donutDisplay.alt = "Display with various donuts";
    aboutContainer.appendChild(donutDisplay);

    const storeDetails = document.createElement("div");
    storeDetails.classList.add("store-details");
    aboutContainer.appendChild(storeDetails);

    const history = document.createElement("section");
    history.classList.add("history");
    storeDetails.appendChild(history);

    const historyTitle = document.createElement("h2");
    historyTitle.classList.add("history-title");
    historyTitle.textContent = "History";
    history.appendChild(historyTitle);

    const historyContent = document.createElement("div");
    historyContent.classList.add("history-content");
    history.appendChild(historyContent);

    const historyContentP1 = document.createElement("p");
    historyContentP1.classList.add("history-content-p1");
    historyContentP1.textContent = siteContent.historyP1;
    historyContent.appendChild(historyContentP1);

    const historyContentP2 = document.createElement("p");
    historyContentP2.classList.add("history-content-p2");
    historyContentP2.textContent = siteContent.historyP2;
    historyContent.appendChild(historyContentP2);

    const storeHours = document.createElement("section");
    storeHours.classList.add("store-hours");
    storeDetails.appendChild(storeHours);

    const storeHoursTitle = document.createElement("h2");
    storeHoursTitle.classList.add("store-hours-title");
    storeHoursTitle.textContent = "Store Hours";
    storeHours.appendChild(storeHoursTitle);

    const schedule = document.createElement("span");
    schedule.classList.add("times");
    schedule.textContent = "Monday to Saturday: 9:00am - 6:00pm";
    storeHours.appendChild(schedule);

    const address = document.createElement("section");
    address.classList.add("address");
    storeDetails.appendChild(address);

    const addressTitle = document.createElement("h2");
    addressTitle.classList.add("address-title");
    addressTitle.textContent = "Address";
    address.appendChild(addressTitle);

    const addressContent = document.createElement("address");
    addressContent.classList.add("address-content");
    addressContent.textContent = "809 Doughridge Road, Crumbleton";
    address.appendChild(addressContent);
}

function createMenuItem(label, price) {
    const li = document.createElement("li");
    li.textContent = `${label} - ${price}`;
    return li;
}

function clearContent() {
    content.textContent = "";
}

export { home, menu, about, clearContent };