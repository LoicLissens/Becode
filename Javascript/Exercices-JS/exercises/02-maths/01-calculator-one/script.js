/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        let add1 = document.getElementById("op-one").value;
        let add2 = document.getElementById("op-two").value;
        let totalAdd = parseInt(add1)+parseInt(add2);
        alert(totalAdd);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let sous1 = document.getElementById("op-one").value;
        let sous2 = document.getElementById("op-two").value;
        let totalSous = parseInt(sous1)-parseInt(sous2);
        alert(totalSous);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let mult1 = document.getElementById("op-one").value;
        let mult2 = document.getElementById("op-two").value;
        let totalMult = parseInt(mult1)*parseInt(mult2);
        alert(totalMult);
    });

    document.getElementById("division").addEventListener("click", () => {
        let div1 = document.getElementById("op-one").value;
        let div2 = document.getElementById("op-two").value;
        let totalDiv = parseInt(div1)/parseInt(div2);
        alert(totalDiv);
    });
})();
