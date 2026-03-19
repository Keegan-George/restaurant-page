import donutImg from "./donut.jpg";

const content = document.querySelector("#content");

function home() {
    const hero = document.createElement("figure");

    const heroImage = document.createElement("img");
    heroImage.src = donutImg;
    heroImage.alrt = "donut with dripping pink frosting";
    heroImage.width = "300"
    heroImage.height = "300";
    hero.appendChild(heroImage);

    const headline = document.createElement("section");
    headline.classList.add("headline");
    headline.textContent = "Donuts Done Right";
    hero.appendChild(headline);

    const blurb = document.createElement("section");
    blurb.classList.add("blurb");
    blurb.textContent = `Hand-crafted doughnuts made with obsession-level attention to detail. From inventive glazes to bold, 
    unexpected flavour combinations, every bite is designed to surprise, delight, and leave you craving the next one. 
    Indulgence starts here.`;

    content.appendChild(hero);
    content.appendChild(blurb);
}


function menu() {
    const donuts = document.createElement("section");
    donuts.classList.add("donuts");
    content.appendChild(donuts);

    const donutTitle = document.createElement("h2");
    donutTitle.classList.add("donut-title");
    donutTitle.textContent = "Donuts";
    donuts.appendChild(donutTitle);

    const single = document.createElement("span");
    single.classList.add("single");
    single.textContent = "1 - $4.50";
    donuts.appendChild(single);

    const halfDozen = document.createElement("span");
    halfDozen.classList.add("half-dozen");
    halfDozen.textContent = "6 - $22.00";
    donuts.appendChild(halfDozen);

    const dozen = document.createElement("span");
    dozen.classList.add("dozen");
    dozen.textContent = "12 - $43.00";
    donuts.appendChild(dozen);

    const milkshakes = document.createElement("section");
    milkshakes.classList.add("milkshakes");
    content.appendChild(milkshakes);

    const milkshakeTitle = document.createElement("h2");
    milkshakeTitle.classList.add("milkshake-title");
    milkshakeTitle.textContent = "Milkshakes";
    milkshakes.appendChild(milkshakeTitle);

    const smallMilkshake = document.createElement("span");
    smallMilkshake.classList.add("small-milkshake");
    smallMilkshake.textContent = "small - $3.45";
    milkshakes.appendChild(smallMilkshake);

    const mediumMilkshake = document.createElement("span");
    mediumMilkshake.classList.add("medium-milkshake");
    mediumMilkshake.textContent = "medium - $5.50";
    milkshakes.appendChild(mediumMilkshake);

    const largeMilkshake = document.createElement("span");
    largeMilkshake.classList.add("large-milkshake");
    largeMilkshake.textContent = "large - $7.25";
    milkshakes.appendChild(largeMilkshake);

    const milkshakeFlavours = document.createElement("span");
    milkshakeFlavours.classList.add("milk-shake-flavours");
    milkshakeFlavours.textContent = "Vanilla, Strawberry, Chocolate, Banana, Oreo, Kit-Kat, Smarties, Biscoff, Pistachio, Cosmic Brownie."
    milkshakes.appendChild(milkshakeFlavours);

    const drinks = document.createElement("section");
    drinks.classList.add("drinks");
    content.appendChild(drinks);

    const drinksTitle = document.createElement("h2");
    drinksTitle.classList.add("drinks-title");
    drinksTitle.textContent = "Drinks";
    drinks.appendChild(drinksTitle);

    const tea = document.createElement("span");
    tea.classList.add("tea");
    tea.textContent = "tea - $1.45";
    drinks.appendChild(tea);

    const coffee = document.createElement("span");
    coffee.classList.add("coffee");
    coffee.textContent = "coffee - $2.25";
    drinks.appendChild(coffee);

    const juice = document.createElement("span");
    juice.classList.add("juice");
    juice.textContent = "juice - $3.00";
    drinks.appendChild(juice);

    const espresso = document.createElement("span");
    espresso.classList.add("espresso");
    espresso.textContent = "espresso - $3.45";
    drinks.appendChild(espresso);

    const latte = document.createElement("span");
    latte.classList.add("latte");
    latte.textContent = "latte - $4.25";
    drinks.appendChild(latte);
}

function about() {
    const history = document.createElement("section");
    history.classList.add("history");
    content.appendChild(history);

    const historyTitle = document.createElement("h2");
    historyTitle.classList.add("history-title");
    historyTitle.textContent = "History";
    history.appendChild(historyTitle);

    const historyContent = document.createElement("div");
    historyContent.classList.add("history-content");
    history.appendChild(historyContent);

    const historyContentP1 = document.createElement("p");
    historyContentP1.classList.add("history-content-p1");
    historyContentP1.textContent = `Founded in the early 1980s in the bustling streets of Crumbleton, Glaze of Glory began as the one-person 
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
    content.appendChild(openingHours);

    const openingHoursTitle = document.createElement("h2");
    openingHoursTitle.classList.add("opening-hours-title");
    openingHoursTitle.textContent = "Opening Hours";
    openingHours.appendChild(openingHoursTitle);

    const times = document.createElement("span");
    times.classList.add("times")
    times.textContent = "Open Hours: Tuesday to Saturday: 10:00am - 6:00pm";
    openingHours.appendChild(times);

    const address = document.createElement("section");
    address.classList.add("address");
    content.appendChild(address);

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