//  constante et fct de dessin
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const randomWordList = ["bouche","marqueur","applaudissements","beau","polluer","militaires","chef","rondelle","stylo","lire","limace","tarentule","dureté","cacao","muet","saper","feuilles"];
let longRandomWordList = randomWordList.length;
const fireImage = document.getElementById("firepng");
let motChoisisTab= []; // initialise le tbaleau du mot choisis
let lettreDevineTab = []; // initialise le tableau des lettre que la personne va devineer
let lettreTry = []; // tab avec TOUTES les lettres
let numberOfTry = 8; // on initialise la variable du nombre d'éssai qui ne doit pas dépasser 8


function drawWood(){
    ctx.beginPath();
    ctx.moveTo(180,400);
    ctx.lineTo(180,90);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(180,90);
    ctx.lineTo(290,90);
    ctx.stroke();
    ctx.closePath();
}

function drawWrope(){
    ctx.beginPath();
    ctx.moveTo(290,90);
    ctx.lineTo(290,150);
    ctx.stroke();
    ctx.closePath();
}

function drawHead () {
    ctx.fillStyle = "black";
    ctx.arc(290,150,20,0,Math.PI*2, false);
    ctx.fill();
}

function drawBody (){
    ctx.beginPath();
    ctx.moveTo(290,150);
    ctx.lineTo(290,280);
    ctx.stroke();
    ctx.closePath();
}

function drawLeftArm(){
    ctx.beginPath();
    ctx.moveTo(290,200);
    ctx.lineTo(250,230);
    ctx.stroke();
    ctx.closePath();
}

function drawRightArm(){
    ctx.beginPath();
    ctx.moveTo(290,200);
    ctx.lineTo(330,230);
    ctx.stroke();
    ctx.closePath();
}

function drawLeftLeg() {
    ctx.beginPath();
    ctx.moveTo(290,280);
    ctx.lineTo(250,320);
    ctx.stroke();
    ctx.closePath();
}

function drawRightLeg() {
    ctx.beginPath();
    ctx.moveTo(290,280);
    ctx.lineTo(330,320);
    ctx.stroke();
    ctx.closePath();
}

function drawFire() {
    ctx.drawImage(fireImage, 260,310,50,50);
}



function drawWord (a) {
    ctx.clearRect(250, 2, 200,50);
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillText ("Tes lettres : "+a, 250,50);
}

function drawletter(a){
    ctx.clearRect(250, 390, 200,50);
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillText ("Utilisés : "+a, 250,390);
}

function drawScore (a) {
    ctx.clearRect(2, 2, 200,50);
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillText ("Encore "+a+" éssais.", 30,50);
}
///////////////////////////////////////////////////////////// script
document.getElementById("one-player").addEventListener("click", ()=>{
    
    document.getElementById("one-player").style = "display:none;";
    document.getElementById("two-players").style="display:none;"
    document.querySelector("main").style="display:block;";
    document.getElementById("play").style="display: block;"
    document.getElementById("run").style = "display:none;";
    tellMeTheWord = document.getElementById("fill-me").value="";
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillText ("Encore 8 éssais.", 30,50);
     drawWood();
     motChoisisTab = randomWordList[Math.round(Math.random()*longRandomWordList)];
     document.querySelector(".guess-word-button").style="display:none;"; // on interchange les paragraphes d'instruction
    document.querySelector(".guess-letter-button").style="display:block;";
});
 ///////////////////////////////////


document.getElementById("two-players").addEventListener("click",()=> { // au clic sur le nombre de player on fait apparaitre le jeux
    document.getElementById("one-player").style = "display:none;";
    document.querySelector("main").style="display:block;";
    document.getElementById("run").style="display: block;"
    document.getElementById("two-players").style="display:none;"
    tellMeTheWord = document.getElementById("fill-me").value="";
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillText ("Encore 8 éssais.", 30,50);
    drawWood();
    

});

document.getElementById("run").addEventListener("click", ()=> { // au clique  sur run on
    
    let tellMeTheWord = document.getElementById("fill-me").value;
    let confirmTheWord = window.confirm("Confirme-tu le mot "+tellMeTheWord+" ?"); // demande de confirmer le mot
    
    if (confirmTheWord === true ){  // si la confirmation du mot est true 
        tellMeTheWord = tellMeTheWord.toLowerCase(); // on met la valeur en minuscule
        document.getElementById("run").innerHTML = "Devine le mot !" // on transforme le bouton run en devine le clique
        motChoisisTab = Array.from(tellMeTheWord); // Met les lettres du mot dans une tableau "motChoisisTab"
        document.getElementById("run").style="display: none;" // on met le bouton "run" en display none pour que l'autre bouton prenne sa place
        document.getElementById("play").style="display: block;" // on fait apparaitre le bouton "play"
        tellMeTheWord = document.getElementById("fill-me").value=""; // remet la valeur d'input a 0 pour vider le champ
        document.querySelector(".guess-word-button").style="display:none;"; // on interchange les paragraphes d'instruction
        document.querySelector(".guess-letter-button").style="display:block;";
        for(let i = 0; i<motChoisisTab.length;i++){
            lettreDevineTab[i] = "_";
        }
        drawWord(lettreDevineTab);
        drawletter(lettreTry);

        

    } else { // si le mot choisis n'est pas bon 
        window.alert("Réécris un mot !"); // demande de réécrire un mot
        tellMeTheWord = document.getElementById("fill-me").value=""; // remet la valeur d'input à 0 pour vide le champ
    }
    
    /* function guessLetter (){ // on crée la fonction qui va chekcer si la lettre est bonne
        if (numberOfTry>0){
            let guessOneLetter = window.prompt("Entre une lettre")
            
        }

    } */

    
    document.getElementById("play").addEventListener("click",()=> {
            let guessOneLetter = document.getElementById("fill-me").value; // lui demande une lettre 
            guessOneLetter = guessOneLetter.toLowerCase();
            let regex = /[a-zA-Z]/g; 
            let regexFound = guessOneLetter.match(regex); // regex
            let doIHaveTry = lettreTry.includes(guessOneLetter);

            if (regexFound.length>1){ // si le joueur a entré plus qu'une lettre
                window.alert("Tu ne peux entrer que des lettres et une seule à le fois !"); // message d'erreur
                tellMeTheWord = document.getElementById("fill-me").value="";
                tellMeTheWord = document.getElementById("fill-me").placeholder="";
                tellMeTheWord = document.getElementById("fill-me").style="color: black;";
            }
            else if (doIHaveTry=== true){ // si le joueur a dejà entrer la meme lettre
                
                tellMeTheWord = document.getElementById("fill-me").value="";
                tellMeTheWord = document.getElementById("fill-me").style="color: red;";
                tellMeTheWord = document.getElementById("fill-me").placeholder="Lettre deja utilisé";
                
            }else { // sinon
                tellMeTheWord = document.getElementById("fill-me").placeholder="";
                tellMeTheWord = document.getElementById("fill-me").style="color: black;";
                let letterIsIn= motChoisisTab.includes(guessOneLetter); // la let letterIsIn regarde si la lettre choisie est dans le tab du mot
                lettreTry.push(guessOneLetter);
                drawletter(lettreTry);
                if (letterIsIn === true) { // si la lettre choisie est dans le tableau du mot
                    for (let i=0; i <motChoisisTab.length;i++){
                        if(guessOneLetter===motChoisisTab[i]){
                            lettreDevineTab[i] = guessOneLetter;
                        }
                    }
                    
                    drawWord(lettreDevineTab);
                    let tellMeTheWord = document.getElementById("fill-me").value="";
                } else{ // sinon
                    numberOfTry--; // réduit le nombre d'éssai de 1
                    
                    drawScore(numberOfTry);
                    tellMeTheWord = document.getElementById("fill-me").value="";
                }
            }
            switch (numberOfTry) {
                case 7:
                    drawWrope();
                    break;
                case 6:
                    drawHead();
                    break;
                case 5:
                    drawBody();
                    break;
                case 4:
                    drawLeftArm();
                    break;
                case 3:
                    drawRightArm();
                    break;
                case 2:
                    drawLeftLeg();
                    break;
                case 1:
                    drawRightLeg();
                    drawFire();
                    break;
            }
            if (numberOfTry>0) { 
                let myTabString = motChoisisTab.toString();
                let myLetterTabString = lettreDevineTab.toString();
                if (myLetterTabString===myTabString){
                    document.querySelector("main").style="display:none;"; // c'est gagné
                    document.getElementById("game-over").style="display:block;";
                    document.getElementById("game-over").innerHTML = "Félicitation !";
                    document.querySelector("body").style="background-color:green;";
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            } else { // si moins de 8 éssais 
                document.querySelector("main").style="display:none;"; // c'est perdu
                document.getElementById("game-over").style="display:block;";
                document.querySelector("body").style="background-color: red;";
                document.getElementById("replay").style="display:block;";
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
            }
        });
        
    
});


//REJOUER
document.getElementById("replay").addEventListener("click",()=> {
    document.getElementById("two-players").style="display:block;";
    document.getElementById("one-player").style = "display:block;";
    document.querySelector("body").style="background-color: black;";
    document.getElementById("replay").style="display:none;";
    document.getElementById("play").style="display:none;";
    tellMeTheWord = document.getElementById("fill-me").value="";
    numberOfTry = 8;
});
