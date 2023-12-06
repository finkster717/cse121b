// declaring global variables
const handgunsElement = document.querySelector("#handguns");
let handgunList = [];

// function to display the list of handguns
const displayHandguns = (handgunList) => {
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

// declaring function to get data for handgunList from api created by yours truly
const getHandguns = async () => {
    const response = await fetch("https://run.mocky.io/v3/6e606a5c-2ba1-4ba7-a28f-5c19b0497806");
    const data = await response.json();
    handgunList = data;

    displayHandguns(handgunList);
    console.log(handgunList);
}

// calling functions...
getHandguns();

// adding event listener...

