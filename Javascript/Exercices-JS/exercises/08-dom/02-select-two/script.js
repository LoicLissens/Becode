/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementsByClassName("target")[0].innerHTML = "owned"; 
    // comme classname ne renvois pas un seul élement mais une liste il faut préciser le quel
})();
