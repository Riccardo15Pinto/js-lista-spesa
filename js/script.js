//check console log

console.log('ok js');

// ## Operazioni preliminari

//recupero elementi dal DOM

const forlistElement = document.getElementById('market-list-1');

const whilelistElement = document.getElementById('market-list-2');

// creo due Array conteneti una lista della spesa

const products1 = ['latte', 'uova', 'pane'];

const products2 = ['spaghetti', 'pomodoro', 'parmiggiano'];

// fine operazioni preliminari

///--------------------------

// logica for

// creo una variabile d'appoggio

let listproducts1 = '';

// creo un ciclo

for(let i = 0; i < products1.length; i++){

    // monto la lista all'interno dell'elemento

    listproducts1 += ' ' + products1[i];

};

//stampo la lista

forlistElement.innerText = listproducts1;

///---------------------------------------------------

// logica while

// creo un contatore

let i = 0;

// creo una variabile vuota

let listproducts2 = '';

//fintanto che non raggiungo la lunghezza totale dell'array

while(products2[i]){

    //monto la lista all'interno dell'elemento

    listproducts2 += ' ' + products2[i];

    //incremento la lista

    i++;

};

//stampo la lista

whilelistElement.innerText = listproducts2;

///-------------------------------------------------


