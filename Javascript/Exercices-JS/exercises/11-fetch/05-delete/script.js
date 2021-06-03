/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const $run = document.getElementById("run");
  $run.addEventListener("click", async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/heroes/0";
    const response = await fetch(url, {
      method: "DELETE",
    });

    console.log(response);
  });
})();
