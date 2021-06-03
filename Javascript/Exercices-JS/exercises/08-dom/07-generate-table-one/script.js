/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let takeTarget = document.getElementById("target"); // on stoque target dans la let 
    let tab = document.createElement("table"); // la let va crée la balise <table>
    takeTarget.appendChild(tab);
    // création des colonne et rangées 
    for (let i=0; i<10; i++){
        let rangee = document.createElement("tr"); // cela va génrée 10 row
        document.querySelector("table").appendChild(rangee); // on met chaque row sur table
        let text = document.createTextNode("je suis la rangée "+(i+1)); 
        rangee.appendChild(text); // le texte av etre appliqué a chaque rangée 
    }
})();
