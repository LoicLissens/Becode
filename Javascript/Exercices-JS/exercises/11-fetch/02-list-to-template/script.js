

/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",()=> { // au clic
        async function recupHeros() { // function assync 
            try { // si promesse résolue 
                const requete = await fetch("http://localhost:3000/heroes"); // fetch le tab des hero en await
                const lesHerosTab = await requete.json(); // le fou dans json en await
                const baliseTarget = document.getElementById("target"); // on selction l'id target
                let longHerosTab = lesHerosTab.length; // longueur du tableau des heros
                for (let i= 0; i<longHerosTab; i++){ // for qui itere sur la long tu tab
                    let nomHeros = lesHerosTab[i].name; // on prend le nom du heros
                    let alterEgoHeros =lesHerosTab[i].alterEgo; // son alter ego 
                    let pouvoir = lesHerosTab[i].abilities; // ses pouvoir
                    const template = document.getElementById("tpl-hero").cloneNode(true); // on clone le template dans la const template
                    const templateCloned = document.importNode(template.content, true); //on met le template cloné dans la const templatecloned
                    baliseTarget.appendChild(templateCloned); // on met le template cloné dans l'id target
                    document.querySelectorAll("strong.name")[i].innerHTML =nomHeros; // on ajoute le nom du hero dans la balise strong de la classe name qui a été cloné
                    document.querySelectorAll("em.alter-ego")[i].innerHTML = alterEgoHeros; // son alter ego
                    document.querySelectorAll("p.powers")[i].innerHTML= pouvoir; // son pouvoir
                }
            }catch(error) {
                console.error(error); // si promesse non résolue
            }
            
        }
       recupHeros(); // appel de la fct quand les await ont été exécuté



    });
})();
