/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // quand dand l'iput pass-one on relache une touche il va ...
    document.getElementById("pass-one").addEventListener("keyup", () => { // dans addeventlistener on prend les event JS mais sans le "on" donc onclic donnera clic
    let inputValue = document.getElementById("pass-one").value; //on prend la valeur de l'input pass-one
    let idCount = document.getElementById("counter");  // on prend la compteur sur le coté de l'input
    let inputLong = inputValue.length // la longueur de la valeur de l'input
    if (inputLong<=10){ // si la longeur de l'input est plus petites ou egale a 10
        idCount.innerHTML=inputLong+"/10"; // on change l'html de idcount pour la longeur de l'input /10
    } else{ // sinon l'attribut html de l'input change a maximum 10 caracteres
        document.getElementById("pass-one").setAttribute("maxlength","10"); 
    }
    });
})();
