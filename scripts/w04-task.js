/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Michael Fink",
    photo: "images/byuprofilepic.png",
    favoriteFoods: [
        "nachos", 
        "chili", 
        "fried chicken", 
        "bacon", 
        "chilaquiles", 
        "pulled pork", 
        "cheese curds", 
        "frozen custard", 
        "Grandma's cheesy scalloped potatoes", 
        "refried beans"
    ],
    hobbies: [
        "reading",
        "playing video games",
        "hiking",
        "camping",
        "shooting firearms",
        "archery"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Circle Pines, Minnesota",
        length: "18 years"
    },
    {
        place: "Cleveland, Tennessee",
        length: "9 years"
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("ul");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let placeLivedName = document.createElement("dt");
    let placeLivedLength = document.createElement("dd");
    placeLivedName.textContent = placeLived.place;
    placeLivedLength.textContent = placeLived.length;
    document.querySelector("#places-lived").append(placeLivedName, placeLivedLength);
})
