/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let laClass = document.getElementsByClassName("target"); // on a boucler pour selctionner tout les target
    for (let i = 0; i<laClass.length;i++){
        laClass[i].innerHTML = "owned";
    } 
   
   
   
})();
