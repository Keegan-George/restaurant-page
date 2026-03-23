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
    const hero = createElement("section", ["hero"]);;
    content.appendChild(hero);

    const heroText = createElement("div", ["hero-text"]);
    hero.appendChild(heroText);

    const title = createElement("h1", ["hero-title"]);
    title.textContent = "Glaze of Glory";
    heroText.appendChild(title);

    const description = createElement("p", "hero-description");
    description.textContent = siteContent.homeDescription;
    heroText.appendChild(description);

    const orderNowButton = createElement("button", ["btn", "order-now"]);
    orderNowButton.textContent = "Order Now";
    heroText.appendChild(orderNowButton);

    const heroImage = createElement("img", ["hero-img"]);
    heroImage.src = donutsImg;
    heroImage.alt = "Three donuts on light blue background";
    hero.appendChild(heroImage);
}

function menu() {
    const menuContainer = createElement("div", ["menu-container"]);
    content.appendChild(menuContainer);

    const donuts = createSection("Donuts", "donuts");
    menuContainer.appendChild(donuts);

    const donutList = createMenuList("donuts")
    donutList.appendChild(createMenuItem("1", "$4.50"));
    donutList.appendChild(createMenuItem("6", "$22.00"));
    donutList.appendChild(createMenuItem("12", "$43.00"));
    donuts.appendChild(donutList);

    const milkshakes = createSection("Milkshakes", "milkshakes");
    menuContainer.appendChild(milkshakes);

    const milkshakeList = createMenuList("milkshake");
    milkshakeList.appendChild(createMenuItem("small", "$3.35"));
    milkshakeList.appendChild(createMenuItem("medium", "$5.50"));
    milkshakeList.appendChild(createMenuItem("large", "$7.25"));
    milkshakes.appendChild(milkshakeList);

    const drinks = createSection("Drinks", "drinks")
    menuContainer.appendChild(drinks);

    const drinksList = createMenuList("drinks");
    drinksList.appendChild(createMenuItem("tea", "$1.65"));
    drinksList.appendChild(createMenuItem("coffee", "$2.25"));
    drinksList.appendChild(createMenuItem("juice", "$3.15"));
    drinksList.appendChild(createMenuItem("espresso", "$3.55"));
    drinksList.appendChild(createMenuItem("latte", "$4.25"));
    drinks.appendChild(drinksList);
}

function about() {
    const aboutContainer = createElement("div", ["about-container"]);
    content.appendChild(aboutContainer);

    const donutDisplay = createElement("img", ["donut-display-img"]);
    donutDisplay.src = donutDisplayImg;
    donutDisplay.alt = "Display with various donuts";
    aboutContainer.appendChild(donutDisplay);

    const storeDetails = createElement("div", ["store-details"]);
    aboutContainer.appendChild(storeDetails);

    const history = createSection("History", "history");
    storeDetails.appendChild(history);

    const historyContent = createElement("div", ["history-content"]);
    history.appendChild(historyContent);

    const historyContentP1 = createElement("p", ["history-content-p1"]);
    historyContentP1.textContent = siteContent.historyP1;
    historyContent.appendChild(historyContentP1);

    const historyContentP2 = createElement("p", ["history-content-p2"]);
    historyContentP2.textContent = siteContent.historyP2;
    historyContent.appendChild(historyContentP2);

    const storeHours = createSection("Store Hours", "store-hours");
    storeDetails.appendChild(storeHours);

    const schedule = createElement("span", ["times"]);
    schedule.textContent = "Monday to Saturday: 9:00am - 6:00pm";
    storeHours.appendChild(schedule);

    const address = createSection("Address", "address");
    storeDetails.appendChild(address);

    const addressContent = createElement("address", ["address-content"]);
    addressContent.textContent = "809 Doughridge Road, Crumbleton";
    address.appendChild(addressContent);
}


function createSection(titleText, className, headingLevel = "h2") {
    const section = createElement("section", [className]);

    const heading = createElement(headingLevel, [`${className}-title`]);
    heading.textContent = titleText;
    section.appendChild(heading);

    return section;
}

function createMenuList(className) {
    const list = document.createElement("ul");
    list.classList.add(`${className}-list`);

    return list;
}

function createMenuItem(label, price) {
    const li = document.createElement("li");
    li.textContent = `${label} - ${price}`;

    return li;
}

function createElement(tag, classNames = []) {
    const element = document.createElement(tag);
    if (classNames.length > 0) {
        element.classList.add(...classNames);
    }

    return element;
}

function clearContent() {
    content.replaceChildren();
}

export { home, menu, about, clearContent };