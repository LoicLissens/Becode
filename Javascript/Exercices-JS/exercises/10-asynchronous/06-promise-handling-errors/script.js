/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",() =>{ // au clique on va ...
        window.lib.getPersons() // appeler la fct getPersons() qui retourne une promise qui si est résolue crée un tab de personnes
        .then((personnes) => { // si la promise est résolue
            console.log(personnes); // affiche le tab de personnes généré dans la console
        }).catch((error)=> { // si la promise échoue
            console.error(error); // affiche un message d'erreur
        });
        
    });
})();
