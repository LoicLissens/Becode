/* becode/javascript
 *
 * /05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];
    /* METHODE CLASSIQUE
    let tabLength= people.length; // on prend l  longueur du tab
    
    for (let i=0; i<tabLength; i++){sumAge+= people[i].age;} // for pour calculer la somme du tab dans le for nomdutab[instance].nom de la key */
    
    // METHODE REDUCE
    let tabLong = people.length; // inutile ? i
    let tabAge = [];
    people.forEach(item => tabAge.push(item.age));
    const methReduce = (item1, item2)=> item1 + item2; // creation de la fct methReduce ou item1 va s'add a item 2 et item1 va valloir l'add et ainsi de suite
    document.getElementById("run").addEventListener("click", () => {
       // methode classique: console.log(sumAge);
       // Methode reduce:
       console.log(tabAge.reduce(methReduce)); // dans la console la reduce est appelé sur tabAge ou de  G a D la fct methReduce va s'appliquer
    });
})();
