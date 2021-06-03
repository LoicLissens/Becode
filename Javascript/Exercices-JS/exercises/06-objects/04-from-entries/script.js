/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const keys = ["name", "species", "age", "gender", "color"];
  const values = ["Skitty", "cat", 9, "female", "tabby"];
  const assoc = [];
  document.getElementById("run").addEventListener("click", () => {
    for (let i = 0; i < keys.length; i++) {
      assoc.push([keys[i], values[i]]);
    }
    obj = Object.fromEntries(assoc);
    console.log(obj);
  });
})();
