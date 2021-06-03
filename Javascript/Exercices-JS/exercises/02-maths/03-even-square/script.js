/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let nbr = 0;
        let pair;
        function checkpair (nbr) {
         if (nbr%2 == 0) {
            pair = true;
           } else {
               pair = false;
          }
        }
        for (nbr = 1; nbr < 21; nbr++){
            checkpair(nbr);
            if (pair == true) {
                alert (nbr*nbr);
            } else {

            }
        }
       





    });
})();
