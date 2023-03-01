/*  Consegna:
    Data una lista della spesa, stampare sulla pagina (anche brutalmente,
         basta che si vedano) gli elementi della lista 
         individualmente con un ciclo while.
    Consigli:
    - Ricordiamoci di inizializzare la variabile di
        contatore prima dell’inizio del ciclo while
    - Ricordiamoci di incrementare il contatore, o 
        comunque di inserire una condizione di uscita, all’interno ciclo while
*/

const list = ['pinoli','castagne','pecorino','mele','uova','plumcake',];
const listDom = document.getElementById('list');

console.log('elementi dell array: ' + list);

let i = 0;
while(i < list.length){

    const listItem = document.createElement('li');
    listItem.innerHTML = list[i];
    listDom.append(listItem);
    console.log(listDom.innerHTML)
    
    i++;

}

