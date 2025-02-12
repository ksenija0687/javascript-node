// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
// (Pvz., kvadratu(4) turi grąžinti 16.)

function kvadratu(skaicius) {
    return skaicius * skaicius;
  }
console.log(kvadratu(4));


// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)

function TikrintiarLyginis(skaicius) {
    return skaicius % 2 === 0;
}

console.log(TikrintiarLyginis(8));  
console.log(TikrintiarLyginis(7));

// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(max(5, 8));  


// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)
 
const tekstas5 = 'JavaScript';
console.log(tekstas5.split('').reverse().join(''));

// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)

const word = 'banana'

function letterCount(text, searchSymbol) {
    let count = 0;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === searchSymbol) {
            count++;
        }
    }

    return count;
}

console.log(letterCount(word, 'a'));

// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" arba "nulis" naudojant ternary.

function tikrintiSkaiciu(skaicius) {
    if (skaicius > 0) {
        console.log("Skaičius yra teigiamas");
    } else if (skaicius < 0) {
        console.log("Skaičius yra neigiamas");
    } else {
        console.log("Skaičius yra lygus nuliui");
    }
}

// 
tikrintiSkaiciu(10);
tikrintiSkaiciu(-5);
tikrintiSkaiciu(0);  

// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji ar mažoji).
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.)

function StartsWith(word) {
    return word.slice(0, 1).toLowerCase("a");
  }

console.log(StartsWith("Automobilis")); 
console.log(StartsWith("namas"));   

// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5(grąžina true arba false).

function division(number) {
    return number % 3 === 0 && number % 5 === 0;  
  }
  
  console.log(division(15));  
  

// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.

const numbers = [10,9,8,7,6,5,4,3,2,1];
console.log(numbers);
console.log(numbers.length);




