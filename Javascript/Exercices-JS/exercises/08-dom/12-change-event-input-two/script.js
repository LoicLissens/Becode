/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   // quand dand l'iput pass-one il y a un changement il va ...
   document.getElementById("pass-one").addEventListener("input", () => { // dans addeventlistener on prend les event JS mais sans le "on" donc onclic donnera clic
   let inputValue = document.getElementById("pass-one").value;
   let valueLong =  inputValue.length;
   let okPasOk = document.getElementById("validity");
   let regex = (/^[a-z0-9]{8,}$/i.test(inputValue))&& inputValue.replace(/[ a-z]/ig,'').length>1;
   /*   ICI REGEX avec : /^[a-z0-9]{6,}$/i.test(inputValue) on test si la chaine ne contient que des chiffres
   et des lettres.  Si le test est true  alors on va compare le nombre de chiffres minimum attendus avec 
   la longueur de la chaine sans les caractères : inputValue.replace(/[a-z]/ig,'').length>1
   ps: \d revien a faire [0-9] ps2: le  flag "g" reset le match si il a lieu et retest autant de fois 
   qu'il le faut si ça a matcher. Et le "match()" renvois la valeur du march dans l'array alors que le 
   test() renvois true ou false.
   */
  /* OU : let regex =inputValue.match(/[0-9]/g); ici il va teste si la chaine est ok va renvoyé la valeur
  dans un array et le flag /g permet de lui dire de terminer le match et en faire un nouveau donc si il 
  y a match un deuxième fois il va mettre la deuxieme valeur dans l'array.  l'array aura donc une longueur
  de 2 ou plus selon le nombre de match. Il suffit alors de mettre dans le if :
  if(inputValue.length >= 8 && found.length >1 ) on test si l'input est plus grand que 8 et si l'array avec 
  les match du regex est plus grand que 1 donc min deux chiffre si oui renvoi true et execute le code !
  */
   if ( regex) {
       okPasOk.innerHTML="OK";
   } else {
       okPasOk.innerHTML= "Pas ok";
   }
   });
})();
