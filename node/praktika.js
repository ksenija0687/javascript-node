
//1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą:
 "Labai gerai", "Gerai",
  "Patenkinamai" 
 "Nepatenkinamai"
//Kuris operatorius čia tinkamiausias? //


function ivertinimas(balas) {

    if (balas >= 9 && balas <= 10) {
        console.log("Labai gerai");
    } else if (balas >= 7 && balas < 9) {
        console.log("Gerai");
    } else if (balas >= 5 && balas < 7) {
        console.log("Patenkinamai");
    } else if (balas >= 1 && balas < 5) {
        console.log("Nepatenkinamai");
    } 
    
}

// 
ivertinimas(1);  // Nepatenkinamai 


//2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).Jei taip, atspausdinkite 
 "Gali balsuoti",
 "Negali balsuoti"
 //Kuris metodas čia tinkamiausias//



function patikrintiBalsavima(amzius) {
    if (amzius >= 18) {
        console.log("Gali balsuoti");
    } else {
        console.log("Negali balsuoti");
    }
}

//  
patikrintiBalsavima(20);  //  Gali balsuoti
patikrintiBalsavima(16);  // Negali balsuoti


3./* Sukurkite programą, 
kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.Kurį metodą čia patartumėte naudoti?*/


function savaitesDiena(dienosNumeris) {
    switch (dienosNumeris) {
        case 1:
            console.log("Pirmadienis");
            return;
        case 2:
            console.log("Antradienis");
            return;
        case 3:
            console.log("Trečiadienis");
            return;
        case 4:
            console.log("Ketvirtadienis");
            return;
        case 5:
            console.log("Penktadienis");
            return;
        case 6:
            console.log("Šeštadienis");
            return;
        case 7:
            console.log("Sekmadienis");
            return;
        default:
            console.log("Neteisingas dienos numeris");
    }
}

// 
savaitesDiena(5);// Penktadienis
savaitesDiena(2); //Antardienis


//4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui,
 //ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?// 


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
tikrintiSkaiciu(10); // Teigiamas
tikrintiSkaiciu(-5); // Neigiamas
tikrintiSkaiciu(0);  // lygus nuliu


//5. Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių://

 //Koks operatorius geriausiai tinka šiam atvejui?//
 
 function nustatytiGrupa(amzius) {
    if (amzius >= 13 && amzius <= 19) {
        console.log("Jaunuolis");
    } else if (amzius >= 20 && amzius <= 64) {
        console.log("Suaugęs");
    } else if (amzius >= 65) {
        console.log("Pensininkas");
    } else {
        console.log("Neteisingas amžius");
    }
}

// 
nustatytiGrupa(16); //Jaunolis
nustatytiGrupa(23);  
nustatytiGrupa(70);  


//6. Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, 
//ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?// 

function tikrintiLyginiArNelygini(skaicius) {
    if (skaicius % 2 === 0) {
        console.log("Skaičius yra lyginis");
    } else {
        console.log("Skaičius yra nelyginis");
    }
}


tikrintiLyginiArNelygini(4);  
tikrintiLyginiArNelygini(3);  