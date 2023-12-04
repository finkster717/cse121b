// declaring global variables
const handgunsElement = document.querySelector("#handguns");
let handgunList = [];

// function to display the list of handguns
const displayHandguns = (handgunList) => {
    handgunList.forEach((handgun) => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.textContent = handgun.name;
        p.textContent = `${handgun.height} x ${handgun.length} x ${handgun.width}`;
        p.textContent += ` | Weight: ${handgun.weight}`;
        p.textContent += ` | Source: ${handgun.source}`;

        article.appendChild(h3);
        article.appendChild(p);
        handgunsElement.appendChild(article);
    });
};

// declaring function to get data for handgunList from api created by yours truly
const getHandguns = async () => {
    const response = await fetch("https://run.mocky.io/v3/c8f784cf-4dd4-479e-9bf6-efc75e0e82b9");
    const data = await response.json();
    handgunList = data;

    displayHandguns(handgunList);
    console.log(handgunList);
}

// calling functions...
getHandguns();

// adding event listener...

