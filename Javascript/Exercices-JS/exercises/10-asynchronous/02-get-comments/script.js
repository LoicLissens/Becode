/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",()=> {
        lib.getPosts((_,content) => { 
          /* la fct gest post a comme call back
          (_,content) => { 
          

          for (let i=0; i<content.length; i++){
            let articleId = content[i].id;
            lib.getComments(articleId,(_,comments) => {
              content[i].commentaire = comments;
            });
          }
          console.log(content);
          puis la fct getcomments a deux parametre le 1 er le id et le deuxieme un call back
          
          */ 

            for (let i=0; i<content.length; i++){
            let articleId = content[i].id;
            lib.getComments(articleId,(_,comments) => {
              content[i].commentaire = comments;
            });
          }
          console.log(content);
         
        });
        
    });
})();
