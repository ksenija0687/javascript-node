// Sukurkite stringą ir išveskite jo ilgį.

let str = "oranges";
let length = str.length;

console.log(length); 

// Konvertuokite stringą į didžiąsias raides.
"ORANGES"
let upperStr = str.toUpperCase();
console.log(upperStr);

// Konvertuokite stringą į mažąsias raides.

let lowerStr = str.toLowerCase();
console.log(lowerStr);

// Pašalinkite tarpus iš string'o pradžios ir pabaigos.
let trimmedStr = str.trim();
console.log(trimmedStr); 



// Patikrinti, ar stringas prasideda žodžiu "Hello"

let startsWithHello = str.trim().startsWith("Hello");
console.log(startsWithHello); 

// Patikrinkite, ar stringas baigiasi žodžiu "World".

let endsWithWorld = str.trim().endsWith ('World');
console.log(endsWithWorld);

// Raskite pirmąją žodžio "Java" poziciją string'e.

str = "oranges Java banai pomidorai"
let positionOfJava = str.indexOf("Java");
console.log(positionOfJava);  

// Raskite paskutinę žodžio "Java" poziciją string'e.

let lastPositionOfJava = str.lastIndexOf("Java");
console.log(lastPositionOfJava);

// Pakeiskite pirmąjį "Java" į "JS".

let replacedStr = str.replace("Java", "JS");
console.log(replacedStr);

// Pakeiskite visus "Java" į "JS".

let replaceStr = str.replace ("Java","JS");

// Padalinkite stringą į masyvą pagal skyriklį.
const zodis = "Java";

console.log(Array.from(zodis));

// Sujunkite du string'us į vieną.
let words = str.split(" ");
console.log(words);

// Išskirkite string'o dalį nuo 3 iki 8 simbolio.

let substring = str.slice(2, 8);
console.log(substring);

// Naudodami slice, paimkite paskutinius 5 string'o simbolius.

"oranges";
let lastFive = str.slice(-5);
console.log(lastFive);

// Sukurkite stringą, kuris pakartojamas 4 kartus.
"oranges";
let repeatedStr = str.repeat(4);
console.log(repeatedStr);

// Patikrinkite, ar string'e yra žodis "fun". includes 

"The circus was so much fun"

 "This circus was so much fun!";
let result = str.includes("fun");

if (result) {
console.log("Žodis 'fun' rastas!");
} else {
 console.log("Žodis 'fun' nerastas.");
}

// Išveskite stringą su kabutėmis "teksto" viduje.
let text= "teksto"
console.log(text);

// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.

// Pašalinkite tarpus tik iš string'o pradžios.

let  = "oranges";
str = str.trimStart(); 
console.log(str);