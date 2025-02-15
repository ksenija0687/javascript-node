
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
//const numbers1 = [1, 2, 3, 4, 5];


function sumOfArray(arr) {
    let total = 0;  
    for (let i = 0; i < arr.length; i++) { 
        total += arr[i];  
    }
    return total;  
}

const numbers1 = [1, 2, 3, 4, 5];
console.log(sumOfArray(numbers1)); 


// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
//const numbers2 = [1, 2, 3, 4, 5, 6];// funkcija while

function sumOfArray(arr) {
    let total = 0;
    let i = 0;
    
    while (i < arr.length) {
        total += arr[i];
        i++;
    }
    
    return total;
}
const numbers = [1, 2, 3, 4, 5,6];
const result = sumOfArray(numbers);
console.log("The sum of the array is:", result)

// Užduotis 3: Rasti didžiausią skaičių masyve

const array1 = [10, 5, 20, 8, 15];
console.log(Math.max(10, 5, 20, 8, 15 ));

console.log(Math.max(...array1));

// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// ============================================= filter method

const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
 
const count =  numbers4.filter(x => x === target).length;

console.log(count);

// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// ============================================= filter method


const numbers5 = [-3, 0, 5, -1, 8, -2];

const teigiamiskaiciai = numbers5.filter(x => x > 0);

console.log(teigiamiskaiciai);

// Užduotis 6: Rasti visų masyvo elementų sandaugą
 // Sprendimas reduce
const numbers6 = [1, 2, 3, 4];
 
const arr = [1,2,3,4];
const sum = arr.reduce((prevValue,curValue) => {
    return prevValue * curValue
},1);
console.log(sum);

// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// index of
const array8 = ['a', 'b', 'c', 'd'];
const searchElement = 'c';
 








