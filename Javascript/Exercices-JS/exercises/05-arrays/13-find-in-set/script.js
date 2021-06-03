/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", () => {
        console.log("il y a  "+people.size+" personnes dans le set"); //  nomduset.size donne la longueur du set
        if (people.has("Alexandre") == true) { // le .has test si qq chose est bien présent dans le set , retourne true si oui 
            console.log("Alexandre est bien dans le tab");
        } else {console.log("il n'y a pas cette personne");}
    });
    
})();
