/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Michael Fink";
let currentYear = "2023";
let profilePicture = "images/byuprofilepic.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}.`);

/* Step 5 - Array */
let favoriteFoods = ["nachos", "chili", "fried chicken", "bacon", "chilaquiles", "pulled pork", "cheese curds", "frozen custard", "Grandma's cheesy scalloped potatoes", "refried beans"]
foodElement.textContent = favoriteFoods;

let newFood = "sweet potato casserole"
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;