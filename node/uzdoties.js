
//Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono 
// pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?

function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return" Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Autumn";
        default:
            return "Wrong Month"
    }
}

console.log(getSeason(8));  


// Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.
// Kuris operatorius naudoti?
    

        function checkEquality(num1, num2) {
            return num1 === num2 ? 'lygus' : 'nelygūs';
        }


console.log(checkEquality(5, 5));


// Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.
// Koks operatorius geriausiai tinka?
 
function test(raide) {
    const balses = ['a', 'ą', 'e', 'ę', 'ė', 'i', 'į', 'y', 'o', 'u', 'ū', 'ų'];
    const priebalses = ['b', 'c', 'č', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 'š', 't', 'v', 'z', 'ž'];
  
    if (balses.includes(raide)) {
        return 'Pateiktas simbolis yra balsė';
    } else if (priebalses.includes(raide)) {
        return 'Pateiktas simbolis yra priebalsė';
    } else {
        return 'Pateiktas simbolis nėra raidė';
    }
  }
  


// Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) 
// išveda, 
// ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?

function checkDay(day) {

    switch (day.toLowerCase()) {
        case "pirmadienis":
        case "antradienis":
        case "trečiadienis":
        case "ketvirtadienis":
        case "penktadienis":
            return "Darbo diena";
        case "šeštadienis":
        case "sekmadienis":
            return "Savaitgalis";
        default:
            return "Neteisingas dienos pavadinimas";
    }
}

console.log(checkDay("Pirmadienis")); 
console.log(checkDay("šeštadienis")); 
console.log(checkDay("Sekmadienis")); 
console.log(checkDay("antradienis"));
console.log(checkDay("Neteisingas dienos")); 


// Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: 
// "Šalta"(< 10°C), "
// Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?


function checkWeather(temperature) {
    if (temperature < 10) {
        return "Šalta";
    } else if (temperature >= 10 && temperature <= 25) {
        return "Šilta";
    } else {
        return "Karšta";
    }
}

console.log(checkWeather(10));   
console.log(checkWeather(13));  
console.log(checkWeather(35));  


// Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3,
// tiek 5. Kurį operatorių naudoti?

function division(number) {
    return number % 3 === 0 && Number % 5 === 0 ?
    'puiku': 'sis skaicius nesidalina nei is 3 is 5'
}

console.log(division(15))


// Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") 
// išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".
// Kuri struktūra geriausiai tinka?

function weekday (dienosTipas) {
    switch (dienosTipas) {
      case "darbo diena":
        return "Dirbti";
      case "savaitgalis":
        return "Ilsėtis";

    }
  }
  
  console.log(weekday("darbo diena")); 
  console.log(weekday("savaitgalis")); 
  console.log(weekday("Antadienis")); 


  // Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius)
//  priskiria aprangos rekomendaciją: "Kepurių nereikia", "Kepurės reikalingos", 
// "Geriau neik į lauką".Koks operatorius geriausiai tinka?


  function temp (temperatura) {
    return (temperatura >= 20) ? "Kepurių nereikia" :
           (temperatura >= 0) ? "Kepurės reikalingos" :
           "Geriau neik į lauką"; 
           //if tempeture -0
  }
  
  
  console.log(temp(30));  
  console.log(temp(15));  
  console.log(temp(-10));  


  // Parašykite programą, kuri nustato, ar vartotojo įvestas metai
//  yra keliamieji.Kurį operatorių naudoti?

  const isLeapYearDate = year => 
    (new Date(year, 1, 29).getDate() === 29) ? "Keliamieji metai" : "Nėra keliamieji metai";

console.log(isLeapYearDate(2024)); 
console.log(isLeapYearDate(2023)); 
