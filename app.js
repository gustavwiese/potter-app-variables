"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  };

  const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  };

  const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  };

  const draco = {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: "hawthorn,unicorn tail-hair,10",
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  };

  const severus = {
    name: "Severus Snape",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: "",
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/snape.jpg",
  };

  showCharacter(harry);
  showCharacter(ron);
  showCharacter(hermione);
  showCharacter(draco);
  showCharacter(severus);
}

function showCharacter(character) {
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.house}</p>
                <p>Date of Birth: ${character.dateOfBirth}</p>
                <p>Played by ${character.actor}</p>
            </article>
        `
  );
}

// function showCharacter(image, name, house, dateOfBirth, actor) {
//     //define elements
//     const articleElement = document.createElement("article");
//     const imageElement = document.createElement("img");
//     const nameElement = document.createElement("h2");
//     const houseElement = document.createElement("p");
//     const dateOfBirthElement = document.createElement("p");
//     const actorElement = document.createElement("p");

//     // set content
//     imageElement.src = image;
//     nameElement.textContent = name;
//     houseElement.textContent = house;
//     dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
//     actorElement.textContent = `Played by ${actor}`;

//     // append child elements to articleElement
//     articleElement.appendChild(imageElement);
//     articleElement.appendChild(nameElement);
//     articleElement.appendChild(houseElement);
//     articleElement.appendChild(dateOfBirthElement);
//     articleElement.appendChild(actorElement);

//     // append article to grid
//     document.querySelector("#characters").appendChild(articleElement);
// }
