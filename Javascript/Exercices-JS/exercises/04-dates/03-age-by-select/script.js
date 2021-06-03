/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // on va récuperer la date actuel
    let curDate = new Date(); // récupere la date actuel complete
    let curYear = curDate.getFullYear(); // l'année
    let curMonth = curDate.getMonth(); // le mois (attention de 0-11)
    let curDay = curDate.getDate(); // le jour 1-31
    
    document.getElementById("run").addEventListener("click", () => {
        // on récupere les infos de naissance en valeur jour 1-31 mois 1-12 et année.
        let jour = document.getElementById("dob-day").value;
        let mois = document.getElementById("dob-month").value;
        let annee = document.getElementById("dob-year").value;
        let dateExacte = jour+(mois*30)+(annee)
         
        

      });
})();
