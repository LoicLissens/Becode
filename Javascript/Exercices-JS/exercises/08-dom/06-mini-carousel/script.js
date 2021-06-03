/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    let longTab = gallery.length; // longueur du tableau
    let getQuery = document.querySelector("img") // useless
    let i  = 1; // comme la premiere image vaut 0 au tab on initialise i a 1 pour switcher a l'image suivante dans le tab
    document.getElementById("next").addEventListener("click", () => { // quand on click sur next
        document.querySelector("img").setAttribute("src", gallery[i]); // on change la srx de img a  gallery i donc 1 au début
        if (i<(longTab-1)){ // si i est plus petit que la longueur du tab - 1 (car de 0 à 4 pour un tab de 5 élements)
            i++; 
        } else {
            i =0; // quand i va valloir 4 ici il va revenir a 0  pour revenir a l'image de base 
        }
    });
})();
