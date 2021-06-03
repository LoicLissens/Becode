/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        
        let louis = [];
        for (let i=0; i<10;i++){
            let creatNumb = Math.round(100*Math.random());// il y a 10 case dans la tableau donc on met une valeur random 1-100 dans chauqe instance du tab
            louis[i]=creatNumb;
        }
        console.log(louis);
        document.getElementById("n-1").innerHTML = louis[0]; // on écit le tableau dans le html
        document.getElementById("n-2").innerHTML = louis[1];
        document.getElementById("n-3").innerHTML = louis[2];
        document.getElementById("n-4").innerHTML = louis[3];
        document.getElementById("n-5").innerHTML = louis[4];
        document.getElementById("n-6").innerHTML = louis[5];
        document.getElementById("n-7").innerHTML = louis[6];
        document.getElementById("n-8").innerHTML = louis[7];
        document.getElementById("n-9").innerHTML = louis[8];
        document.getElementById("n-10").innerHTML = louis[9];
        document.getElementById("n-10").innerHTML = louis[9];
        let tabSort= louis.sort(function(a, b){return a - b}); // on trie le tab par ordre croissant 
        console.log(tabSort);
        let tabLength = louis.length;
        let numSum = 0 ;
        for (let i=0; i<tabLength; i++){ // un for pour fair la somme du tab
            numSum += louis [i];
        }
        
        let numMoy = numSum/tabLength; // on reprend la som du tab divisé par sa longueur pour la moyenne
        document.getElementById("min").innerHTML = tabSort[0]; // ajout du plut petit nombre du tab trier
        document.getElementById("max").innerHTML = tabSort[9]; // ajout du plus rgand nombre du tab trier
        document.getElementById("sum").innerHTML = numSum; // ajout de la somme du tab
        document.getElementById("average").innerHTML = numMoy; // ajout de la moyenne dut ab 
      });
})();
