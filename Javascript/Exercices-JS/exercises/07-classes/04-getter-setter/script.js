/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person { // on declare la classe personne avec constructeur
        constructor(firstname, lastname){ 
            this.firstname = firstname;
            this.lastname = lastname;
        }
        
        get name () { // on lui assigne une méthode get (getteur) que l'on peut appelé en dehors de l'objet sans les "()"
            return this.firstname+" "+this.lastname;
        }
        set name (valeur){ // le setteur (méthode set) permet de modifier la valeur d'un objet en dehors de celui-ci en l'appelant de la même manière qu'un get.
            const modif = valeur.split(" ");  // comme set ne peut avoir qu'une valoir les deux (fist et last name vont avoir la même )
            this.firstname = modif[0];// on stock donc la valeur dans un tableau 0 et 1 qui vont être splitté
            this.lastname = modif[1];
        }
        
    }
    document.getElementById("run").addEventListener("click", () => { 
        let loic = new Person ("Lissens", "Loic"); // declaration de l'objet 
        console.log(loic.name); 
        loic.firstname = "jean"; // on modifie  la valeur de firstname de l'objet loic
        loic.lastname = "coco";
        console.log(loic.name); // on affiche les valeurs modifié en appelant la méthode set (name)
    });
})();
