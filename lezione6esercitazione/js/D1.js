/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let spiegazione = "I principali datatype in javascript sono: il dato Stringa, il dato Numerico, il dato Booleano, il dato Null e il dato Undefined. Il dato Stringa indica un carattere qualsiasi, numero o lettera, o anche una sequenza di caratteri. Si indica con i doppi apici (le virgolette). il dato Numerico indica solo numeri, sia interi che decimali. Il dato Booleano può indicare solo due valori: true o false, vero o falso. Serve per fare controlli sul codice. Il dato Null serve a rilevare le variabili alle quali non abbiamo assegnato volontariamente un valore. Il dato Undefined indica le variabili alle quale non abbiamo ancora assegnato un valore"
console.log (spiegazione)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 let nome = "Gabriele"
 console.log (nome)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12
let numero2 = 20
let numero3 = numero1 + numero2
console.log (numero1 + numero2)
console.log (numero3) 


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

nome = "Delfrate"
console.log (nome)

/*const cognome = "Alvazzi"
cognome = "Esposito"
console.log (cognome)*/




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero4 = 4
let numero5 = x - numero4
console.log (x - numero4)
console.log (numero5)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log (name1 !== name2)
console.log (name1 === name2)
console.log (name1.toLowerCase === name2.toLowerCase)


/* extra, celsius to fahrenheit*/

let tempc = prompt ("Inserisci temp celsius")
let tempf = (tempc * 1.8) + 32;
console.log ("Temp celsius corrisponde a " + tempf + "° Fahrenheit")