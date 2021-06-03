/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=> { // au clic sur run on ...
        async function generatePers () { // defini un fct en async generatePers
            try { // si la promise est résolue retourne
                let generPers = await window.lib.getPersons(); // la fct getPersons en await dans une let
                console.log (generPers); // on affiche le résultat de la let donc de la fct getPersons()
            } catch (error) { // si la promise n'est pas résolue 
                console.error(error); // message de console d'erreur
            }
        }
        generatePers(); // on appel la fct qui était en async 
    });
})();
