/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const target = document.getElementById("target"); // on prend l'id target dans une const
    const template = document.getElementById("tpl-hero").cloneNode(true); // on clone le template dans la const template
    const templateCloned = document.importNode(template.content, true); //on met le template cloné dans la const templatecloned
    document.getElementById("run").addEventListener("click", async ()=> { // au clic on ...
        let valueInput = document.getElementById("hero-id").value; // stoque la valeur de l'input dans une let
        let idInput = parseInt(valueInput); // convertie cette valeur en chiffre
        
    try { // si promesse résolue
        const requete = await fetch("http://localhost:3000/heroes");  // fetch le tab d'heros en await
        const tabHeroes = await requete.json(); // met les heros en  json en await
       tabHeroes.forEach(element => { // pour chaque element du tab 
           
           if(idInput===element.id){ // on regarde si la valeur de l'input est égal à l'id de l'heros
           // si oui 
            target.appendChild(templateCloned); // on met le template cloné dans l'id target
            document.querySelector("strong.name").innerHTML = element.name ; // on ajoute le nom du hero dans la balise strong de la classe name qui a été cloné
            document.querySelector("em.alter-ego").innerHTML = element.alterEgo ; // son alter ego
            document.querySelector("p.powers").innerHTML = element.abilities ; // son pouvoir
           } 
       });
        
       
    } catch (error) {   
        console.error(error);
    }
   });
})();
