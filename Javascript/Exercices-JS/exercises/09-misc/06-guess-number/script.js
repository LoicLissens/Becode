/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const num = Math.floor(Math.random() * 100);
  console.log(num);

  let input = prompt("Chiffre ?");
  let essay = 0;
  if (input == num) alert(`Bien joué ! Essais:${essay}`);
  const testNum = () => {
    input < num ? (input = prompt("plus grand") && essay++) : (input = prompt("plus petit") && essay++);
  };
  while (input != num) {
    testNum();
  }
})();
