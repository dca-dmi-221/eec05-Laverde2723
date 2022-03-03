'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
    for (let i = 0; i < word.length; i++) {
        console.log(word.charAt(i));
    }
}
wordCutter(testWord);

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    targetWord = targetWord.toLowerCase();
    targetWord = normalizeWord(targetWord);
    let estado = false;
   for (let i = 0; i < wordsList.length; i++) {
       const word = wordsList[i];
       if(targetWord == word.toLowerCase()){
           estado = true;
       }
   }
   if(estado === true){
    console.log(targetWord + " esta en la lista.");
    }else{
    console.log(targetWord + " no esta en la lista.");
    }
}
function normalizeWord(word){
    return word = word.normalize('NFD').replace(/[\u00C0-\u00FF]/g, '');
}
wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);




/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let palabraLarga = wordsList[0];
    let palabraCorta = wordsList[0];
    let palabraPromedio = 0;
    for (let i = 0; i < wordsList.length; i++) {
        if(wordsList[i].length > palabraLarga.length){
            palabraLarga = wordsList[i];
        }
        if(wordsList[i].length < palabraCorta.length){
            palabraCorta = wordsList[i];
        }
        palabraPromedio += wordsList[i].length;
    }
    console.log(palabraLarga + " palabra mas larga");
    console.log(palabraCorta + " palabra mas corta");
    console.log("El promedio de letras es: " + palabraPromedio);
}
wordLengthClassifier(testSampleList)


/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindrome(word) {
    word = word.toLowerCase()
    if(word.charAt(0) === word.charAt(word.length-1)){
        console.log(word + " es un palíndromo")
    }else{
        console.log(word + " no es un palíndromo")
    }
}
palindrome(onVerificationWordA);
palindrome(onVerificationWordB);
palindrome(onVerificationWordC);
palindrome(onVerificationWordD);



/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
    const list = containerTestObject.list;
    let vocales = 0;
    let consonantes = 0;
    list.forEach(word => {
      word.split('').forEach(letter => {
        if (
          letter === 'a' ||
          letter === 'e' ||
          letter === 'i' ||
          letter === 'o' ||
          letter === 'u'
        ) {
          vocales++;
         } else {
           consonantes++;
         }       
        
      })
    })
    return [vocales, consonantes];
  }
  console.log(lettersCounter(containerTestObject));



/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const listado = listA.concat(listB)
    console.log(...listado);
   }
   arrayJoiner(wordArrayA, wordArrayB)


/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    result = []

    listOfWords.forEach((palabra, i) => {
  
        if(palabra.split("").every(letra => {
            return wordToExplore.includes (letra);
        })) result.push(i)
  
    })
  }
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let consonantes = [];
    for (let i = 0; i < objectMultiContainer.listA.length; i++) {
        for (let a = 0; a < objectMultiContainer.listA[i].length; a++) {
            const letras = objectMultiContainer.listA[i][a];
            if(letras !== 'a' || letras !== 'e' || letras !== 'i' || letras !== 'o' || letras !== 'u'){
                consonantes.push(letras);
            }
        }
    }
    objectMultiContainer = {consonantes};
    return console.log(consonantes)
}
console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    let medidor = 0;
    for (let i = 0; i < words.length; i++) {
        const palabra = words[i];
        for (let a = palabra.length; a > -1; a--) {
            const letras = palabra[a];
            if(letras === 'a' || letras === 'e' || letras === 'i' || letras === 'o' || letras === 'u'){
                medidor++;
            }
            if(medidor === 1){
                letras.replace(a,"x");
            }
        }
    }
    console.log(words)
}
lastVocalReplacer(someWordsToTest);


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    let numeroDoble = 0;
    let nuevo=[]; 
    for (let i = 0; i < listB.length; i++) {
        nuevo[i]=listB[i].split("").reverse().join("");
    }
    for (let i = 0; i < listA.length; i++) {
        for(let j = 0; j < nuevo.length; j++){
            if (nuevo[j] == listA[i]){
                numeroDoble++;
            }return numeroDoble;
        }
    }
    return {numeroDoble}  
  }

  console.log(doubleListVerifier(testListA,testListB));