/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        function randomColor (){
         let a = Math.round(256*Math.random());
         let b = Math.round(256*Math.random());
         let c = Math.round(256*Math.random());
         document.body.style.background = "rgb(" + a + "," + b + "," + c + ")";
        }
        randomColor ();
        
        
    });
})();
