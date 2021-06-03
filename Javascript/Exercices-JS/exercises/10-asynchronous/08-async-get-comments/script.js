/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=> { // au clic sur run le script va ...
        async function addComment () { // mettre la fct addComment  en async  pour qu'elle ne se lance pas direct
            console.log("génaration du tab"); // affiche que le tab se génere
            let getArticle = await window.lib.getPosts(); // mais la fct getPost en await on attend qu'elle se fasse 
            for (let i=0; i<getArticle.length; i++){ // for ou on itere sur la long du tab généré par getPosts
                async function getCommentFunction (){ // assync la fct 
                getId = getArticle[i].id; // prend l'id de charque article 
                let getComment = await window.lib.getComments(getId);// met en await getComment doncon attend que les commentaire sois généré avant de lancer la fct
                getArticle.comentaire = getComment; // ajoute les commentaire aux articles
                }
                getCommentFunction(); // appel la fct 
            }
            console.log(getArticle); // on affiche les article dans la consoles
            } 
        addComment(); // finalement on appel la ftc 
        
    });
})();
