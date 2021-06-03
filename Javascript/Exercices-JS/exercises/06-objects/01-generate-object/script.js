/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let loic = new Object(); // creation d'un objet "loic"
    loic.lastname = "c'est lili"; // on assigne la valeur "c'est lili" à la clé "lastname"
    loic.firstname = "C'est Lolo";
    loic.age = "25 ans";
    loic.city = "Woo";
    loic.country = "Beerland";
    document.getElementById("run").addEventListener("click", () => {
        console.log(loic);
    })

})();
