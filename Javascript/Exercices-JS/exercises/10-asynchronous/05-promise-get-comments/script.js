/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",() => { // au clic on t...
        window.lib.getPosts() // appel la fct getPosts 
        .then ((artciles) =>{  // lui dit qui si la promise est validé  avec articles comme arg
            for(let i=0; i<artciles.length; i++){ // on itere sur chaque article du tableau
                getId = artciles[i].id; // on récupere l'id de chaque article du tab
                window.lib.getComments(getId) // pour chaque article du tab generer par getPosts()  on appel la fct getComments avec l'id de l'article en parametre
                .then((comments) => { // si la  promesse de getComments() est validée avec comments en arguments
                    artciles[i].commentaires = comments; // return une generations de commentaire pour chaque articles ayant l'id correspondant
                });
            };
            console.log(artciles); // on affiche dans la console les articles generer avec les comentaires
        });

        
    });
})();
