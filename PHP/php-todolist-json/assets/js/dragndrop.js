const boxToDo = document.querySelector("#todo");
const boxArchive = document.querySelector("#archive");

boxToDo.addEventListener('dragover', (e)=>
{
    e.preventDefault();
});

boxToDo.addEventListener('dragenter', function() 
{
    console.log("jour");
});

boxToDo.addEventListener('dragleave', function() 
{
    console.log("nuit");
});

// Cet événement détecte n'importe quel drag & drop qui se termine, autant le mettre sur « document » :
document.addEventListener('dragend', function() 
{
    alert("Un Drag & Drop vient de se terminer mais l'événement dragend ne sait pas si c'est un succès ou non.");
});


boxArchive.addEventListener('dragover', (e)=>
{
    e.preventDefault();
});