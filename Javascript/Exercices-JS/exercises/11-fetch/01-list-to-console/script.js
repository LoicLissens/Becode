/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",()=> { // au clic ..
        async function rest () { // la fct rest en async 
            try { // si la promise est résolue 
                const requete = await fetch("http://localhost:3000/heroes"); // on va cherche dans l'api rest  les héros avec la fct fetch en await
                const getHeroes = await requete.json();  // la constante getHeroes renvera la requete fetch qui sera résolue avec avec des donnée en json
                console.log(getHeroes); // on affiche les héros dans le tab
            } catch (error) { // si promesse non résolue erreur
                console.error(error);
            }
        }
        rest (); // appel de la fct 
    }); 
})();
