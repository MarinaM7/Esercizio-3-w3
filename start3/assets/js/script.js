/*
var mele = 4;
var arance = 5;
var a;
corretta();
sbagliata();

function corretta() {
    document.getElementById('corretta').innerHTML = `Succo con ${mele} mele e ${arance} arance`;
}

function sbagliata() {
    document.getElementById('sbagliata').innerHTML = `Succo con ${mele} mele e ${a} arance`;
}
*/

//LISTA FRUTTA

function fruttolo(mele, arance) {
    const fruttone = `Succo con ${mele} mele e ${arance} arance`;
    return fruttone;
}
document.getElementById('corretta').innerHTML = fruttolo(4, 5);
document.getElementById('sbagliata').innerHTML = fruttolo(6);

//----------------------------------
//ETA

var tuaEta = 2022 - 2002;
eta();

function eta() {
    document.getElementById('eta').innerHTML += `${tuaEta} anni`;
}

//----------------------------------
// ARROW

ragazze();

function ragazze() {

    let anna = 2022 - 30;
    let maria = 2022 - 24;

    let tipa1 = '';
    let tipa2 = '';

    tipa1 = () => { return `L'anno di nascita di Anna è il ${anna}` };

    document.getElementById('persona1').innerHTML = tipa1();

    tipa2 = () => { return `L'anno di nascita di Anna è il ${maria}` };

    document.getElementById('persona2').innerHTML = tipa2();
};

//----------------------------------
//FUNZIONE IN FUNZIONE


function cake() {
    return function(){
        let fetta1 = 9;
        let fetta2 = 15;

        document.getElementById('torta').innerHTML = `Torta con ${fetta1} fette di mela e ${fetta2} fette di arancia`;
    }
}

let grantorta = cake();
grantorta();

//----------------------------------
//SCONTRINO

var btn = document.getElementById('calcola');

btn.addEventListener('click', function() {

    let cibo = Number(document.getElementById('cibo').value);

    let detersivi = Number(document.getElementById('detersivi').value);

    let abiti = Number(document.getElementById('abiti').value);

    let somma = cibo + abiti + detersivi;

    document.getElementById('totale').innerHTML = `Il totale spesa è: € ${somma}`;
});
