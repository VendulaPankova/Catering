
                                /*
 Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Just Food, Your Mama, Flavour Haven                            
Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. 
Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu.

                                */

//Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
const justFood = (pocetLidi) => {
    const cenaZaOsobu = 200
    const celkovaCena = cenaZaOsobu * pocetLidi
    return `Catering od Just Food pro ${pocetLidi} lidí za ${celkovaCena}`
}


//Dodává středně drahé jídlo vyrobené z lepších surovin.
const yourMama = (pocetLidi) => {
    const cenaZaOsobu = 500
    const celkovaCena = cenaZaOsobu * pocetLidi
    return `Catering od Your Mama pro ${pocetLidi} lidí za ${celkovaCena}`
}


//Dodává drahé jídlo z kvalitních surovin
const flavourHaven = (pocetLidi) => {
    const cenaZaOsobu = 3000
    const celkovaCena = cenaZaOsobu * pocetLidi
    return `Catering od Flavour Haven pro ${pocetLidi} lidí za ${celkovaCena}`
}
                                        /*
                                    
//Napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. 
Funkce createEvent pak vrátí zprávu ve smyslu

                                        */

const createEvent = (nazev, pocetLidi, funkceCateringu) => {
    const cateringMsg = funkceCateringu(pocetLidi)
    return `Událost ${nazev} s ${cateringMsg}`
}

                                        /*
Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. 
Funkce createEvent pak vrátí zprávu ve smyslu

                                        */

console.log(justFood(50)) // catering od Just Food pro 50 za 10.000 Kč
console.log(yourMama(80)) // catering od Your Mama pro 80 za 40.000 Kč
console.log(flavourHaven(100)) // catering od Flavour Haven pro 100 za 300.000 Kč

console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven))
// Udalost Inaugurace prezidenta s cateringem od Flavour Haven pro 100 lidí za 300000 KČ
console.log(createEvent("Vánoční večírek", 80, yourMama))
// Udalost Vánoční večíre s cateringem od Your Mama pro 80 lidí za 40.000 KČ
console.log(createEvent("Narozeninová párty", 50, justFood))
// Udalost Narozeninová párty s cateringem od Just Food pro 50 lidí za 10.000 KČ






