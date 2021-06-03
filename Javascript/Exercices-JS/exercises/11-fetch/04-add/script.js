/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  async function lol(data) {
    try {
      const toPost = await fetch("http://localhost:3000/heroes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const myJson = await toPost.json();
      console.log(myJson);
    } catch (error) {
      console.error(error);
    }
  }
  document.getElementById("run").addEventListener("click", (e) => {
    console.log(e);

    e.preventDefault();

    let getHeroName = document.getElementById("hero-name").value;
    let getHeroAlterEgo = document.getElementById("hero-alter-ego").value;
    let getHeroPouvoir = document.getElementById("hero-powers").value;
    const data = {
      name: getHeroName,
      alterEgo: getHeroAlterEgo,
      ablities: [getHeroPouvoir],
    };

    lol(data);
  });
})();
