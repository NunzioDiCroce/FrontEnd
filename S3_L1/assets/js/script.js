/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var l1;
var l2;
function area(l1,l2) {
    var area = l1*l2;
    return area;
}
var result1 = area(10,10);
console.log(result1);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var n1;
var n2;
function crazySum(n1,n2) {
    if(n1===n2) {
        var sommaPerTre = (n1+n2)*3;
        return sommaPerTre;
    }
    var somma = n1+n2;
    return somma;
}
var resul2 = crazySum(3,3);
console.log(resul2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(parametro) {
    if(parametro>19) {
        var differenzaPerTre = Math.abs(parametro-19)*3;
        return differenzaPerTre;
    }
    var differenza = Math.abs(parametro-19);
    return differenza;
}
var result3 = crazyDiff(119);
console.log(result3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(parametro) {
    if (parametro !== parseInt(parametro)) {
        console.log('Esercizio4: Scrivere un numero intero!')
    } else {
        if(parametro>20 && parametro<=100 || parametro===400) {
            return true;
        } return false;
    }
}
var result4 = boundary(400);
console.log(result4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function epify(parametro) {
    if(typeof parametro !== 'string' ) {
        console.log('Il parametro deve essere una stringa!')
    } else if (typeof parametro === 'string' ) {
        if(parametro.slice(0,7) === 'EPICODE') {
            console.log(parametro);
        } else {
            console.log('EPICODE'+parametro);
            }
    }
}
epify('EPICODE');

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(parametro) {
    if(parametro !== parseInt(parametro) || parametro <= 0) {
        console.log('Il parametro deve essere un numero positivo!')
    } else if(parametro%3 === 0 && parametro%7 === 0){
        console.log('Il parametro è multiplo di 3 e di 7.');
        } else if(parametro%3 === 0) {
            console.log('Il parametro è multiplo di 3.');
            } else if(parametro%7 === 0) {
                console.log('Il parametro è multiplo di 7.');
                } else {
                    console.log('Il parametro NON è multiplo nè di 3 nè di 7.');
                    }
}
check3and7(21);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
    console.log(stringa);
    var stringaSplit = stringa.split('');
    console.log(stringaSplit);
    var stringaSplitReverse = stringaSplit.reverse();
    console.log(stringaSplitReverse);
    var stringaSplitReverseJoin = stringaSplitReverse.join('');
    console.log(stringaSplitReverseJoin);    
}
reverseString('oirartnoc la esarf');

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa) {
    console.log(stringa);
    var stringaSplit = stringa.split(' ');
    console.log(stringaSplit);
    for(let i=0; i<stringaSplit.length; i++) {
        stringaSplit[i] = stringaSplit[i].charAt(0).toUpperCase() + stringaSplit[i].slice(1);
    }
    var stringaSplitJoin = stringaSplit.join(' ');
    console.log(stringaSplitJoin);

}
upperFirst('frase ottavo esercizio');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
    console.log(stringa);
    var stringaSplit = stringa.split('');
    console.log(stringaSplit);
    stringaSplit.pop();
    console.log(stringaSplit);
    stringaSplit.shift();
    console.log(stringaSplit);
    var stringaSplitJoin = stringaSplit.join('');
    console.log(stringaSplitJoin);
}
cutString('stringa nono esercizio')

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    var randomArray = [];
    for(let i=0; i<n; i++) {
        randomArray.push(Math.round(Math.random()*10));
    }
    console.log(randomArray);
}
giveMeRandom(10);


