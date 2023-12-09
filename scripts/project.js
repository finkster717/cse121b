// declaring global variables
const handgunsElement = document.querySelector("#handguns");
const disclaimerElement = document.querySelector("#disclaimer");
let handgunList = [];

// declaring function to display the list of handguns
function displayHandguns(handgunList) {
    handgunList.forEach((handgun) => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const height = document.createElement("ul");
        const length = document.createElement("ul");
        const width = document.createElement("ul");
        const weight = document.createElement("ul");

        h3.textContent = handgun.name;
        img.src = handgun.image;
        img.alt = handgun.id;
        height.innerHTML = `<strong>Height: </strong>${handgun.height}`;
        length.innerHTML = `<strong>Length: </strong>${handgun.length}`;
        width.innerHTML = `<strong>Width: </strong>${handgun.width}`;
        weight.innerHTML = `<strong>Weight: </strong>${handgun.weight}`;

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(height);
        article.appendChild(length);
        article.appendChild(width);
        article.appendChild(weight);
        handgunsElement.appendChild(article);
    });
};

// declaring function to get data for handgunList from api
const getHandguns = async () => {
    const response = await fetch("https://run.mocky.io/v3/9587f351-6d03-4ca8-84fd-86d2b693001c");
    const data = await response.json();
    handgunList = data;

    displayHandguns(handgunList);
    console.log(handgunList);
}

// declaring function to clear the handgunsElement and disclaimerElement
function clear() {
    handgunsElement.textContent = "";
    disclaimerElement.textContent = "";
}

// declaring function to filter handguns based on user input
function filterHandguns(handguns) {
    clear();

    const filter = document.querySelector("#filterHandguns").value;

    switch(filter) {
        case "concealedCarry":
            // declaring function to sort concealedCarry handguns by height, an important factor in concealed carry
            function sortByHeight(handguns) {
                return handguns.sort((a, b) => parseFloat(a.height) - parseFloat(b.height));
            };
            // declaring function to prioritize handguns with width less than 1.21 inches, another important factor in concealed carry
            function prioritizeCCW(handguns) {
                return handguns.sort((a, b) => {
                    if (parseFloat(a.width) < 1.21 && parseFloat(b.width) >= 1.21) {
                        return -1;
                    } else if (parseFloat(a.width) >= 1.21 && parseFloat(b.width) < 1.21) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            };
            // showing information on how data is sorted
            disclaimerElement.textContent = "These are a few recommendations based on how comfortable each handgun is to carry based on dimensions, this is subjective and your mileage may vary. Keep in mind smaller and lighter handguns are more difficult to shoot. Some handgun models come in multiple color configurations, images are for reference only and may not reflect what you see in you local gun store. Please visit your local gun store and handle the firearms you are interested in before making a purchase.";
            // instantiating functions and displaying concealedCarry handguns
            const CCW = handguns.filter(handgun => parseFloat(handgun.height) < 5.20);
            const sortedCCW = prioritizeCCW(sortByHeight(CCW));
            displayHandguns(sortedCCW);
            break;
        case "openCarry":
            displayHandguns(handguns.filter(handgun => parseFloat(handgun.height) >= 5.20));
            break;
        case "all":
            displayHandguns(handguns);
            break;
    }
}

// calling function to populate the list of handguns and their properties...
getHandguns();

// adding event listener...
document.querySelector("#filterHandguns").addEventListener("change", () => {
    filterHandguns(handgunList);
});
