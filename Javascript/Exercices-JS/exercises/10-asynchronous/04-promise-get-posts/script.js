

/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",() => { // au clic sur l'élement run
        window.lib.getPosts() // on appel la fct getPosts qui contient une promise qui est un objet qui peut etre soit résolue soit pas résolue
        .then((acrticle)=> {  // si la promise ne retourne pas d'erreur, then reçois la promise qui est résolue ou rejetée 
            console.log(acrticle); // si la promise est résolue il va console .log article.
        });
    });
})();
