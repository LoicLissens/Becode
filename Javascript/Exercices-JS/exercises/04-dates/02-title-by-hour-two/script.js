/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let curDate = new Date();
    let heure = curDate.getHours();
    let min = curDate.getMinutes();
    let totalMinutes = (heure*60)+min; // on converti l'heure en minute pour avoir le nobmre total écoulée depusi le début de la journée
    let totalMax = (17*60)+30; // Cette variable en nombre total de minute écoulée correspond a 17h30
   
    if (totalMinutes<totalMax) {
        document.getElementById("target").innerHTML = "Bonjour, il est "+heure+"h"+min;
    } else {
        document.getElementById("target").innerHTML = "Bonsoir, il est "+heure+"h"+min;
    }

})();
