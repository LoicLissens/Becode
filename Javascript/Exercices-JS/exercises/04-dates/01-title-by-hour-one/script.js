/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
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
    console.log(heure+"h"+min);
    if (heure<18) {
        document.getElementById("target").innerHTML = "Bonjour, il est "+heure+"h"+min;
    } else {
        document.getElementById("target").innerHTML = "Bonsoir, il est "+heure+"h"+min;
    }

    
})();
