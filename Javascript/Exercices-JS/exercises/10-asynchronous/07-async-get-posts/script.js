/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => { // quand on clic sur run le scipt va...
    async function getArticle () { // définir la fct getArticle en await donc qui ne s'éxécutera que quand l'await sera executé
        console.log("le tableau est en génération"); // informe dans la console que le tab est en génération
        let articles = await window.lib.getPosts(); // crée la let articles pour la fct getPost() en await
        console.log(articles); // afiche la valeur de la let articles donc le tab généré par getPost
    }
    getArticle(); // appel de la fonction getArticle
    });
    
})();
