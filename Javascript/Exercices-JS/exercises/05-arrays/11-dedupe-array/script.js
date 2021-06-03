/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    let fruitsLength = fruits.length;
    console.log(fruitsLength);
    let dubleFruits = fruits+","+fruits; // dubleFruits va faire les tab fruits *2  la virgune sert a ce que les deux cerises ne soient pas collées
    let dubleSplit = dubleFruits.split(","); // on split la chaine de carracter qu'a donné dubleFruits pour la mettre dans une tableau
    dubleSplit = [...new Set(dubleSplit)] // on transforme le tab dublesplit en un tab qui ne retien que les valeurs unique avec la métode set
    document.getElementById("run").addEventListener("click", () => { // les "..." avant le set https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition
        console.log(dubleSplit);
    });
})();
