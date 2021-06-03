let CreationTableauLangages =  () => {
 let arr = [ 'Html', 'CSS', 'Java', 'PHP' ];
 return arr;
}

let CreationTableauNombres =  () => {
 let arr2 = [...Array(6).keys()];
 //arr2 = Array(6).map( (elm,index,arr) => index)  ANOTHER WAY
 return arr2;
}

let RemplacementElement =  (langages) => {
  langages[2] = "Javascript";
  return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby");
    langages.push("Python");
    return langages;
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-1);
    nombres.unshift(-2);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
 let reseaux_sociaux =  reseaux_sociaux_chaine.split(",");
 return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
 return langages.join(",");
}

let TriTableau =  (reseaux_sociaux) => {
 return reseaux_sociaux.sort();
}

let InversionTableau =  (reseaux_sociaux) =>{
 return reseaux_sociaux.reverse();
}
