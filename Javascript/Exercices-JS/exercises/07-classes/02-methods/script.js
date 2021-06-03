/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person { // on crée la classe personne avec le constructeur pour nom et prénom, par convention no met tjs les nom de classe avec un Maj
        constructor (firstName, lastName){
            this.nom = firstName; 
            this.prenom = lastName;
            this.sayHello = function(){ // dans cette classe on défini une méthode sayHello qui va afficher un message dans la console
                console.log("Hello, "+this.nom+" "+this.prenom);
            }
        }
    }
   

    document.getElementById("run").addEventListener("click", () => { 
        let loic = new Person( // au clic sur le bouton "run" on va crée une instance de person appelé loic
            "Lissens",
            "Loïc",
            
        )
       loic.sayHello(); // on appel la fonction sayHello que l'on applique a l'instance loic
    });

})();
