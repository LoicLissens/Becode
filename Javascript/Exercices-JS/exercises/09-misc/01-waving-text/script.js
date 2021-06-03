/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const myWave = document.getElementById("target");
  let text = myWave.innerText;
  tabText = text.split(" ");
  let p = 0;
  let transTxt = [];
  let police = [12, 22, 32, 42, 52, 42, 32, 22];
  tabText.forEach((el) => {
    p >= 7 ? (p = 0) : (p = p);
    transTxt.push(`<span style="font-size:${police[p]}px;">${el}</span>`);
    p++;
  });

  transTxt = transTxt.join(" ");
  console.log(transTxt);
  myWave.innerHTML = transTxt;
})();
