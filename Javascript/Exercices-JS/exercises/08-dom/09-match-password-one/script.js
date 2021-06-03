/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let valueOne = document.getElementById("pass-one").value; // au clic on récupère la valeur de pass-one et two
        let valueTwo = document.getElementById("pass-two").value;
        if (valueOne===valueTwo){ // on dit que si les deux valeur sont identiques
            alert("bien ouej") // il affiche bien joué
        } else {
            document.getElementById("pass-one").style.borderColor="red"; // sinon il prend les deux input et change leur css en rouge
            document.getElementById("pass-two").style.borderColor="red";
            
        }
    });
})();
