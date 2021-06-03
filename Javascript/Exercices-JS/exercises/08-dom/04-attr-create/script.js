/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   let getImage= document.getElementById("source").getAttribute("data-image");  // on sélection l'attribu data-im dans la let
    document.getElementById("target").appendChild(document.createElement("img")); // on crée un balise img dans l'id target et on appenchild pour qu'il se passe qq chose
    document.querySelector("img").setAttribute("src", getImage); // 
    let getParent = Array.from(document.getElementsByTagName("section"));
    console.log(getParent);
    getParent[1].removeChild(getParent[1].firstElementChild);
    
})();
