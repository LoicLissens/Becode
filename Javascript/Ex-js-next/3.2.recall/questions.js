let selectElementsStartingWithA = array => {
  let arrFilt = array.filter(e => {
    if (e.charAt(0).toLowerCase() === "a") {
      return e;
    }
  });
  return arrFilt;
};

let selectElementsStartingWithVowel = array => {
  let arrFilt = array.filter(e => {
    if (
      e.charAt(0).toLowerCase() === "a" ||
      e.charAt(0).toLowerCase() === "o" ||
      e.charAt(0).toLowerCase() === "i"
    ) {
      return e;
    }
  });
  return arrFilt;
};

let removeNullElements = array => {
  let arrFilt = array.filter(e => e !== null);
  return arrFilt;
};

let removeNullAndFalseElements = array => {
  let arrFilt = array.filter(e => e !== null && e !== false);
  return arrFilt;
};

let reverseWordsInArray = array => {
  for (let i = 0; i < array.length; i++) {
    let a = [...array[i]];
    a.reverse();
    a = a.join("");
    array[i] = a;
  }
  return array;
};

let everyPossiblePair = array => {
  return "Write your method here";
};

let allElementsExceptFirstThree = array => {
  let arrayWithOutFirstThree = [];
  console.log(array.length);

  for (let i = 3; i < array.length; i++) {
    arrayWithOutFirstThree.push(array[i]);
  }
  return arrayWithOutFirstThree;
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = array => {
  return "Write your method here";
};

let getFirstHalf = string => {
  return string.substring(0, Math.round(string.length / 2));
};

let makeNegative = number => {
  return -Math.abs(number);
};

let numberOfPalindromes = array => {
  return "lololol";
};

let shortestWord = array => {
  return "Write your method here";
};

let longestWord = array => {};

let sumNumbers = array => {
  const reducere = (a, b) => a + b;
  return array.reduce(reducere);
};

let repeatElements = array => {
  return "Write your method here";
};

let stringToNumber = string => {
  return parseFloat(string);
};

let calculateAverage = array => {
  const reducere = (a, b) => a + b;
  let sum = array.reduce(reducere);
  return sum / array.length;
};

let getElementsUntilGreaterThanFive = array => {
  return "Write your method here";
};

let convertArrayToObject = array => {
  return "Write your method here";
};

let getAllLetters = array => {
  return "Write your method here";
};

let swapKeysAndValues = object => {
  return "Write your method here";
};

let sumKeysAndValues = object => {
  return "Write your method here";
};

let removeCapitals = string => {
  let low = string.toLowerCase();
  return low;
};

let roundUp = number => {
  return Math.ceil(number);
};

let formatDateNicely = date => {
  return "Write your method here";
};

let getDomainName = string => {
  return "Write your method here";
};

let titleize = string => {
  return "Write your method here";
};

let checkForSpecialCharacters = string => {
  return "Write your method here";
};

let squareRoot = number => {
  return Math.sqrt(number);
};

let factorial = number => {
  return "lol";
};

let findAnagrams = string => {
  return "Write your method here";
};

let convertToCelsius = number => {
  let ceils = Math.round((number - 32) * (5 / 9));
  return ceils;
};

let letterPosition = array => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  array.forEach((e, index) => {
    array[index] = alphabet.indexOf(e.toLowerCase()) + 1;
  });
  return array;
};
