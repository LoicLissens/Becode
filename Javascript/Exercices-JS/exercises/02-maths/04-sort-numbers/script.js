/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
      let nums = document.getElementById("numbers").value;
      console.log(nums);
      let numsSplit = nums.split(',');
      console.log(numsSplit);
      
      let tabInt =[];
      numsSplit.forEach(function(numsSplit){
        tabInt.push(parseInt(numsSplit));
        })
        console.log(tabInt);
      
      
      tabInt.sort(function(a,b){
          return a-b;
      });
      console.log (tabInt); 
      
      /*document.getElementById("numbers").value=tabInt; => affiche dans la barre es nombre a classer le nombre trier*/
      
    });
})();
