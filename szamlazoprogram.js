let adatok = [
    {idopont: 1, sms: 10, hivas: 23},
    {idopont: 2, sms: 2, hivas: 33},
    {idopont: 3, sms: 5, hivas: 12},
    {idopont: 4, sms: 3, hivas: 2},
    {idopont: 5, sms: 7, hivas: 11},
    {idopont: 6, sms: 31, hivas: 22},
    {idopont: 7, sms: 0, hivas: 17},
    {idopont: 10, sms: 9, hivas: 68},
    {idopont: 11, sms: 59, hivas: 19},
    {idopont: 12, sms: 6, hivas: 27},
    {idopont: 13, sms: 13, hivas: 31},
    {idopont: 15, sms: 2, hivas: 39},
    {idopont: 16, sms: 16, hivas: 41},
    {idopont: 17, sms: 0, hivas: 21},
    {idopont: 19, sms: 7, hivas: 33},
    {idopont: 20, sms: 20, hivas: 6},
    {idopont: 21, sms: 2, hivas: 14},
    {idopont: 22, sms: 1, hivas: 55},
    {idopont: 23, sms: 23, hivas: 4},
    {idopont: 25, sms: 0, hivas: 10},
    {idopont: 27, sms: 0, hivas: 26},
    {idopont: 30, sms: 4, hivas: 43}
]
function bevitel() {
    let idopont = document.getElementById("idopont").value;
    let sms = document.getElementById("sms").value;
    let hivas = document.getElementById("hivas").value;

    let szamlazoprogram = {
        Időpont: parseInt(idopont),
        SMS: parseInt(sms),
        Hívás:parseInt (hivas)
     };
     adatok.push(szamlazoprogram)
     console.log(adatok)
}
function szamol() {
    let smsSum = 0
    let hivasSum = 0

    for (const t of adatok) {
        smsSum += t.sms
    }

    for (const h of adatok){
        hivasSum += h.hivas
    }
     console.log(smsSum)
     console.log(hivasSum)
    
    let osszesen= `December hónapban összesen ${smsSum} SMS-t küldtek, ami ${smsSum*20} Ft és ${hivasSum} percet telefonáltak, ami ${hivasSum*39} Ft. Összesen ${smsSum*20+hivasSum*39} Ft.`
     document.getElementById("osszesen").innerHTML=osszesen
     console.log(osszesen)
     let maxsms = -1
     let maxnapok = -1
     for (const aktualisadatok of adatok) {
        if(maxsms < aktualisadatok.sms){ 
            maxsms = aktualisadatok.sms;
            maxnapok = aktualisadatok.idopont
        }
    }   
    let legtobbsms= `December ${maxnapok}. napján küldték a legtöbb SMS-t, mindösszesen ${maxsms} db-ot.`
    document.getElementById("legtobbsms").innerHTML=legtobbsms
    console.log(legtobbsms)
}