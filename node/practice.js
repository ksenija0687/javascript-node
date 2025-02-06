/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", 
 * jei neigiamas 
 */
 
function teigimas (num) {
  /*if (num > 0){
  return "true";
  } else {
   return "false";
  }
}*/
return num > 0;
}
  

   
  console.log(teigimas(-5));  //false
  

  /**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.(switch)
 */

  function getMonthName(monthNumber) {
    let monthName;
    switch(monthNumber) {
        case 1:
            monthName = "Sausis";
            break;
        case 2:
            monthName = "Vasaris";
            break;
        case 3:
            monthName = "Kovas";
            break;
        case 4:
            monthName = "Balandis";
            break;
        case 5:
            monthName = "Gegužė";
            break;
        case 6:
            monthName = "Birželis";
            break;
        case 7:
            monthName = "Liepa";
            break;
        case 8:
            monthName = "Rugpjūtis";
            break;
        case 9:
            monthName = "Rugsėjis";
            break;
        case 10:
            monthName = "Spalis";
            break;
        case 11:
            monthName = "Lapkritis";
            break;
        case 12:
            monthName = "Gruodis";
            break;
        default:
            monthName = "Neteisingas mėnesio numeris";
    }
    return monthName;
}



console.log(getMonthName(12)); //Gruodis


//
// * Užduotis Nr. 3
// * Parašykite funkciją,// kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".//* 
 
 

  function compareNumbers(a, b) {
    switch (true) {
        case a > b:
            return "Pirmas didesnis";
        case a < b:
            return "Antras didesnis";
        case a === b:
            return "Lygūs";
        default:
            return "Neteisingi duomenys";
    }
}


console.log(compareNumbers(5, 3)); //Pirmas didesnis
console.log(compareNumbers(2, 7)); //Antra didesnis


  

/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */

function grazinaSkaicius(x,y){
  if (x <y){
    return "Antras didesnis";
   } else {
    return 'Lygus';
  }
}

console.log(grazinaSkaicius(4,4))//Lygus

// Užduotis Nr. 4
 //* Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.//
 // P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".//
 //

 function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


console.log(celsiusToFahrenheit(0));  //32
console.log(celsiusToFahrenheit(100)); //212
console.log(celsiusToFahrenheit(-40));  //-40
