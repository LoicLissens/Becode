/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
const $target = document.getElementById("target");
let text = $target.innerText;
text = text.split("");
$target.innerText = "";
let i = 0;
let intervalTime = [];
text.forEach((el) => {
  intervalTime.push(Math.floor(Math.random() * (1000 - 400) + 400));
});

let lol = setInterval(() => {
  $target.innerHTML += text[i];
  i++;
  if (i == text.length) {
    clearInterval(lol);
  }
}, intervalTime[i]);
