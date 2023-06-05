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

let listproducts1 = '<ul>';

// creo un ciclo

for(let i = 0; i < products1.length; i++){

    // monto la lista all'interno dell'elemento

    listproducts1 += `<li>${products1[i]}</li>`;

};

listproducts1 += '</ul>'

//stampo la lista

forlistElement.innerHTML += listproducts1;

///---------------------------------------------------

// logica while

// creo un contatore

let i = 0;

// creo una variabile vuota

let listproducts2 = '<ul>';

//fintanto che non raggiungo la lunghezza totale dell'array

while(products2[i]){

    //monto la lista all'interno dell'elemento

    listproducts2 += `<li>${products2[i]}</li>`;

    //incremento la lista

    i++;

};

listproducts2 += '</ul>'

//stampo la lista

whilelistElement.innerHTML += listproducts2;

///-------------------------------------------------


