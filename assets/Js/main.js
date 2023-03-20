/* 
#Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.
##Consigli del giorno: 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Eventuali validazioni e controlli possiamo farli anche in un secondo momento.
##Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta
tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, 
divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, 
divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, 
divise in 7 caselle per 7 righe;

*/

/* strumenti

*/


const containerEl = document.querySelector('.container')
const play = document.querySelector('.play');
const reset = document.querySelector('.reset');

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
play.addEventListener('click', function () {

    // recupero del valore selezionato
let selectDaVerificare = document.getElementById("selectDaVerificare");
let indiceSelezionato = selectDaVerificare.selectedIndex;
let valoreSelezionato = selectDaVerificare.options[indiceSelezionato].value;
console.log(valoreSelezionato);
    containerEl.innerHTML = "";
    for (let i = 1; i <= valoreSelezionato; i++) {
        const divEl = document.createElement('div')
        divEl.append(i)
        containerEl.append(divEl)
        /*Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
        ed emetto un messaggio in console con il numero della cella cliccata.*/
        divEl.addEventListener('click', function(){
            console.log('è la cella numero:',i)
            this.classList.toggle('bg_light_blue')
        })
    }

})
reset.addEventListener('click', function(){
    containerEl.innerHTML = ''
})

