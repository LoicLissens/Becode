// Switch "A faire" et "Todo"
// délacration:
const todoBut = document.getElementById("todo-but");
const archiveBut = document.getElementById("archive-but");
const todo = document.getElementById("todo");
const archive = document.getElementById("archive");
// Animation de la todolist
const apear = todoList => {
  todoList.style.display = "block";
  todoList.classList.add("fadeInDown");
  todoList.classList.remove("fadeOutDown");
};
const disapear = todoList => {
  todoList.style.display = "none";
  todoList.classList.add("fadeOutDown");
  todoList.classList.remove("fadeInDown");
};
todoBut.addEventListener("click", () => {
  apear(todo);
  disapear(archive);
});
archiveBut.addEventListener("click", () => {
  apear(archive);
  disapear(todo);
});

// Check valeur des checkbox pour le bouton "archiver!""
// declaration
const checkbox = document.querySelectorAll(".check");
const doArchive = document.getElementById("doarchive");
let tabCheckBox = [...checkbox]; // je met la const checkbox dans un tab tabCheckBox sinon la méthdoe every() ne marche pas

/// display or not the button
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", () => {
    if (checkbox[i].checked == true) {
      // checker regarde si la checkbox est coché et renvois true ou false
      doArchive.style.visibility = "visible";
    } else {
      if (tabCheckBox.every(el => el.checked == false) == true) {
        // every test si tout les élements du tab sont à false donc non coché et renvoi true si c'est le cas
        doArchive.style.visibility = "hidden";
      }
    }
  });
}
// AJAX
const assyncArchive = document.getElementById("assync-archive");

assyncArchive.addEventListener("click", async () => {
  try {
    const requete = await fetch("assets/json/results.json");
    const data = await requete.json();
    console.log(data);
  } catch (error) {
    console.log("lolilol");
  }
});

/// NAVBAR HAMBURGER
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
