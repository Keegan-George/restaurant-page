import donutsImg from "./donuts-hero.jpg";
import donutDisplayImg from "./donut-display.jpg";

const content = document.querySelector("#content");

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
    description.textContent = `Hand-crafted doughnuts made with obsession-level attention to detail. From inventive glazes to bold, 
    unexpected flavour combinations, every bite is designed to surprise, delight, and leave you craving the next one. 
    Indulgence starts here.`;
    heroText.appendChild(description);

    const orderNowButton = document.createElement("button");
    orderNowButton.classList.add("btn", "order-now");
    orderNowButton.textContent = "Order Now";
    heroText.appendChild(orderNowButton);

    const heroImage = document.createElement("img");
    heroImage.classList.add("hero-img")
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

    const single = document.createElement("li");
    single.textContent = "1 - $4.50";
    donutList.appendChild(single);

    const halfDozen = document.createElement("li");
    halfDozen.textContent = "6 - $22.00";
    donutList.appendChild(halfDozen);

    const dozen = document.createElement("li");
    dozen.textContent = "12 - $43.00";
    donutList.appendChild(dozen);

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

    const smallMilkshake = document.createElement("li");
    smallMilkshake.textContent = "small - $3.45";
    milkshakeList.appendChild(smallMilkshake);

    const mediumMilkshake = document.createElement("li");
    mediumMilkshake.textContent = "medium - $5.50";
    milkshakeList.appendChild(mediumMilkshake);

    const largeMilkshake = document.createElement("li");
    largeMilkshake.textContent = "large - $7.25";
    milkshakeList.appendChild(largeMilkshake);

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

    const tea = document.createElement("li");
    tea.textContent = "tea - $1.45";
    drinksList.appendChild(tea);

    const coffee = document.createElement("li");
    coffee.textContent = "coffee - $2.25";
    drinksList.appendChild(coffee);

    const juice = document.createElement("li");
    juice.textContent = "juice - $3.00";
    drinksList.appendChild(juice);

    const espresso = document.createElement("li");
    espresso.textContent = "espresso - $3.45";
    drinksList.appendChild(espresso);

    const latte = document.createElement("li");
    latte.textContent = "latte - $4.25";
    drinksList.appendChild(latte);
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
    historyContentP1.textContent = `Founded in the bustling streets of Crumbleton, Glaze of Glory began as the one-person 
    dream of a baker who believed life is simply bettor with doughnuts. Armed with a rolling pin, a tiny storefront, and a knack for 
    bold flavours, they quickly turned a small neighbourhood shop into the talk of the town.`
    historyContent.appendChild(historyContentP1);

    const historyContentP2 = document.createElement("p");
    historyContentP2.classList.add("history-content-p2");
    historyContentP2.textContent = `Fast-forward to today and our dough has traveled far — with multiple locations across North America, more than 50 flavours, and new 
    ideas always rising in the kitchen. Whether you're into classics, wild creations, or something in between, we've got a treat that'll 
    make your day a hole lot sweeter.`
    historyContent.appendChild(historyContentP2);

    const openingHours = document.createElement("section");
    openingHours.classList.add("store-hours");
    storeDetails.appendChild(openingHours);

    const openingHoursTitle = document.createElement("h2");
    openingHoursTitle.classList.add("opening-hours-title");
    openingHoursTitle.textContent = "Opening Hours";
    openingHours.appendChild(openingHoursTitle);

    const schedule = document.createElement("span");
    schedule.classList.add("times")
    schedule.textContent = "Tuesday to Saturday: 10:00am - 6:00pm";
    openingHours.appendChild(schedule);

    const address = document.createElement("section");
    address.classList.add("address");
    storeDetails.appendChild(address);

    const addressTitle = document.createElement("h2");
    addressTitle.classList.add("address-title");
    addressTitle.textContent = "Address";
    address.appendChild(addressTitle);

    const addressContent = document.createElement("span");
    addressContent.classList.add("address-content");
    addressContent.textContent = "809 Doughridge Road, Crumbleton";
    address.appendChild(addressContent);
}

function clearContent() {
    content.textContent = "";
}

export { home, menu, about, clearContent };