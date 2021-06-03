/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let takeTarget = document.getElementById("target"); // on stoque target dans la let 
    let tab = document.createElement("table"); // la let va crée la balise <table>
    takeTarget.appendChild(tab);
    // création des colonne et rangées 
    //COLONNESR
    for (let i=0; i<10; i++){
        let rangee = document.createElement("tr"); // cela va génrée 10 row
      
        // RANGEES
        for (let l=0; l<10; l++){
            let col = document.createElement("td");// cela va généré 10 col dans chaque row
            rangee.appendChild(col); // pour chaque rangé on lui emt le col
            let multiplication = (i+1)*(l+1); // la let stock les multiplication
            col.innerHTML= multiplication; // on applique les multiplication au colonnes

        }
        document.querySelector("table").appendChild(rangee); // on met chaque row sur table
       
    }
})();
