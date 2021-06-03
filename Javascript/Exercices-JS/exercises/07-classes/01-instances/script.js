/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat { // on déclare une classe avec le mot clés class suivit par son nom. Si on met un classe dans une const ou lette on peut la nomé ou ne pas la nomé elle sera alors anonyme
        constructor(name, age) { //on doit tjs délcarer la classe avant l'instancier
            this.nom = name;
            this.age = age;
        }
    }
    let kit = new Cat ("Skitty", 9);
    let pixel = new Cat ("Pixel",6);
    let lesChats = kit.nom+", "+kit.age+" ans, et "+pixel.nom+", "+pixel.age+" ans.";

    
    document.getElementById("run").addEventListener("click", () => {
     console.log(lesChats);
    });
})();
