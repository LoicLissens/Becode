/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
 let text = texte1+texte2;
 return text;
}
let afficherCar5 =  (texte) => {

    let car = texte.charAt(4);
    return car;
}
let afficher9Car =  (texte) => {
    return texte.substring(0,9);
}
let majusculeString =  (texte) => {
let upp = texte.toUpperCase();
return upp;
}
let minusculeString =  (texte) => {
let min = texte.toLowerCase();
return min;
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    let str = typeof(texte);
    if (str === "string"){
        return true;
    }
}

let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    return texte.match(/\s/g).length;
}
let InverseString =  (texte) => {
    let splitString = texte.split("");
    splitString = splitString.reverse();
    splitString = splitString.join("");
    return splitString;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
let puiss = Math.pow(x,y);
return puiss;
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let answer = array.map(e => Math.abs(e));
    return answer;
}
let sufaceCercle =  (rayon) => {
    let surf = (rayon*rayon)*Math.PI;
    return Math.round(surf);
}
let hypothenuse =  (ab, ac) => {
let bc = Math.pow(ab,2) + Math.pow(ac,2);
bc = Math.sqrt(bc);
return bc;
}
let calculIMC =  (poids, taille) => {
 let imc = poids/(taille*taille);
 let round = imc*100;
 round = Math.round(round);
 round = round/100;
 return round;
}
