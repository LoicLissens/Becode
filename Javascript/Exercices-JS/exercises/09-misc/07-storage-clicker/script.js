/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const $target = document.getElementById("target");
  const $button = document.getElementById("increment");
  let counter = null;
  localStorage.getItem("counter") ? (counter = localStorage.getItem("counter")) : (counter = 0);
  $target.innerHTML = counter;
  $button.addEventListener("click", () => {
    counter++;
    localStorage.setItem("counter", counter);
    $target.innerHTML = counter;
  });
})();
