/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
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
    ];
    console.log(fruits);
    document.getElementById("run").addEventListener("click", () => {
        fruits.pop(); //surprime le denrier élement du tableau donc cerise ici
        fruits.shift(); // suprime le premier élements 
        fruits.unshift('banane'); // Ajoute "banane" au debut du tableau
        fruits.push('Kiwi'); // Ajoute "kiwi" a la fin du tableau
        console.log(fruits);
      });
    // your code here
})();
