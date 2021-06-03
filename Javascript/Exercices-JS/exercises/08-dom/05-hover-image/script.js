/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("img").addEventListener("mouseover", () => { // on dit que si la souris passe sur le tag img avec "mouseover"
     let imgDeux = document.querySelector("img").getAttribute("data-hover"); // la let imgDeux va prendre l'attribu "data-hover"
     document.querySelector("img").setAttribute("src", imgDeux);  // on change l'attribu src pour ce qui a été recup dans la let imgDeux

    });

})();
