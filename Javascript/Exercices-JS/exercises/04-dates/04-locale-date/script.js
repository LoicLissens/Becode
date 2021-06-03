/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let curDate = new Date(); // Recupere la date actuelle complete
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    let dateFr = curDate.toLocaleDateString('fr-FR', options); // toLocalDateString est une fct de JS a utilisé aves les options 
    let curHour = curDate.getHours();
    let curMinute = curDate.getMinutes();
    document.getElementById("target").innerHTML = dateFr+", "+curHour+"h"+curMinute;
    
})();
/*
let curDay = curDate.getDay(); // recupere le jour de la semaine 0-6
let curDayMonth = curDate.getDate(); // recupere le jour du mois 1-31
let curMonth = curDate.getMonth(); // Recupere le mois 0-11
let curYear = curDate.getUTCFullYear(); // Recupere l'année 
let curHour = curDate.getHours(); //Recupere l'heure 0-23
let curMinute = curDate.getMinutes(); //Récupere les minutes 0-59
*/