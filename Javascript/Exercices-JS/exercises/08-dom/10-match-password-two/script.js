/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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
            document.getElementById("pass-one").className="error"; // sinon il prend les deux input et change leur classe en "error"
            document.getElementById("pass-two").className="error";
            
        }
    });
})();
