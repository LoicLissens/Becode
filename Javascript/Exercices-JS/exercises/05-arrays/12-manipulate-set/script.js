 /* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([ // set est un objet qui permet de stocker n'importe quel valeurs primitives ou objet mais de valeur UNIQUE
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
       
    ]);
    
    document.getElementById("run").addEventListener("click", () => {
        fruits.delete("pomme"); // .delete enleve du set 
        fruits.delete("cerise");
        fruits.add("banne"); // .add ajoute au set
        fruits.add("kiwi");
        console.log(fruits);
    
    });

})();
