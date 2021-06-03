/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    let lengthBirds = birds.length; // prend la longueur du tab birds
    let lengthAdjectives = adjectives.size; // récupere la longueur du set adjectives
    let randomName; // déclaration de la let randomName pour le scope de l'event click
    document.getElementById("run").addEventListener("click", () => {
        let tabAdjectives = [...adjectives]; // transforme le set adjective en tableau
        let itBe = Math.floor(Math.random()*lengthBirds); //  crée le random en fonction de la longueur de birds pour récup un mon random et l'isole dans une let pour le récup dans le if car objet dans le tableau.
        let randomBirds = birds[itBe].name; //  let qui récupere un nom alléatoire du tab birds
        let randomAdjectives = tabAdjectives[Math.floor(Math.random()*lengthAdjectives)]; // récupere un adjectif random du tab adjectives
        if (birds[itBe].fem == true) { // if pour savoir si il faut accorder l'adjectif enfonction de la clé-valeur fem dans le tab birds
            randomName= "La "+randomBirds+" "+randomAdjectives+"e";
        } else {
            randomName= "Le "+randomBirds+" "+randomAdjectives;
        }
        document.getElementById("target").innerHTML = randomName;
    });
   
})();
