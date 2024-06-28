

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 20);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti 
  proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
    name: 'Yuri',
    surname: 'Lenzi',
    age: 33,

}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete (me.age);
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills",
    contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['html', 'css', 'javascript'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('java');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
    if (num1 > num2)
        return num1;
    else if (num2 > num1)
        return num2;
    else
        return 'Sono uguali';
}

console.log(whoIsBigger(20, 21));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni 
  parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(string = '') {
    return string.split(' ');
}

console.log(splitMe('Ciao a tutti'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(string = '', boolean) {
    if (boolean) {
        return string.slice(1, string.length);
    }
    else
        return string.slice(0, string.length - 1);
}

console.log(deleteOne('Telecomando', false));


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre 
  numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(string = '') {
    return string.replace(/\d+/g, '');
}

console.log(onlyLetters('I have 4 dogs'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido 
  indirizzo email.
*/

function isThisanEmail(string = '') {
    let myRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return myRegEx.test(string);

}

console.log(isThisanEmail('ciaobello'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
    const itaDay = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato']
    let dateNow = new Date();
    let day = dateNow.getDay();
    console.log(itaDay[day]);
}
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto 
  contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle 
  invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(num) {
    const ritorna = { sum: 0, values: [] };
    let sum = 0;
    for (i = 0; i < num; i++) {
        let nums = dice();
        ritorna.values[i] = nums;
        sum += nums;
    }
    ritorna.sum = sum;
    return ritorna;
}

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da 
  tale data.
*/

function howManyDays(myData) {

    myData /= 1000;
    myData /= 86400;
    myData = Math.floor(myData);


    dataNow = Date.now();
    dataNow /= 1000;
    dataNow /= 86400;
    dataNow = Math.floor(dataNow);
    console.log(dataNow);

    return dataNow - myData - 1;
}

const myData = new Date(2020, 5, 28);

console.log('Giorni: ' + howManyDays(myData));




/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(birthDayDay) {
    const today = new Date();
    day = today.getDate();
    month = today.getMonth();
    if (day === birthDayDay.getDate() && month === birthDayDay.getMonth()) {
        return true;
    } else
        return false;
}

dataBirthday = new Date(0, 5, 28);
console.log(isTodayMyBirthday(dataBirthday));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file


const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },

    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto 
  fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(myObject = {}, myString = '') {
    delete (myObject[myString]);
    return myObject;
}
console.log(me);
console.log(deleteProp(me, 'name'));


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
    let newMovie = '';
    let recentYear = 0;
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].Year > recentYear) {
            newMovie = movies[i].Title;
            recentYear = movies[i].Year;
        }
    }
    console.log(`${newMovie} del ${recentYear} è il più recente`);
}

newestMovie();

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
    let total;
    movies.forEach((elemnt, index) => {
        total = index + 1;
    });
    console.log('I film totali sono: ' + total);
}
countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array 
  "movies" fornito.
*/

function onlyTheYears() {
    const myyear = [];
    movies.forEach((element) => {
        myyear.push(element.Year);

    });
    console.log(myyear);
}
onlyTheYears();


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti 
  nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
    const arrayFilm = [];
    movies.forEach((element) => {
        if (parseInt(element.Year) < 2000) {
            arrayFilm.push(element.Title);
        }

    });
    return arrayFilm;
}

console.log('I film prodotti nel millenio scorso sono: ' + onlyInLastMillennium() + ' ');

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film 
  contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
    let total = 0;
    movies.forEach((element) => {
        total += parseInt(element.Year);
    });
    return total;
}


console.log('La somma di tutti gli anni è: ' + sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" 
  fornito che la contengono nel titolo.
*/

function searchByTitle(mystring = '') {
    console.log(mystring);
    const arrayFilm = [];
    movies.forEach((element) => {
        console.log(element.Title);
        if (element.Title === mystring) {
            arrayFilm.push(element.Title);
        }
    });
    if (arrayFilm.length === 0) {
        return 'Nessun Film Trovato'
    } else
        return arrayFilm;
}

console.log(searchByTitle('Mio nonno'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due 
  array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio 
  titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(string = '') {
    const yesNoMovies = {
        match: [],
        unmatch: []
    }
    movies.forEach((element) => {
        if (string === element.Title)
            yesNoMovies.match.push(element.Title);
        else
            yesNoMovies.unmatch.push(element.Title);
    })

    return yesNoMovies;
}
console.log(searchAndDivide('Lord of the Flies'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo 
  dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(num) {
    if (num > movies.length)
        return 'Indice troppo alto';
    else {
        if (num === movies.length) {
            movies.pop();
            return movies;

        }

        movies.splice(num, 1);
        return movies;
    }


}
console.log(removeIndex(0));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById('container');

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const tdPage = document.querySelectorAll('td');

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printConsoleTd() {
    tdPage.forEach((element) => {
        console.log(element.innerText);
    });
}
printConsoleTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addBackground() {
    const aPage = document.querySelectorAll('a');
    aPage.forEach((element) => {
        element.style.backgroundColor = 'red';
        element.style.color = 'black';
    });
}
addBackground();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addLi() {
    const myList = document.getElementById('myList');
    newLi = document.createElement('li');
    newLi.innerText = 'Nuovo Li';
    myList.appendChild(newLi);
}
addLi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function removeLi() {
    const myList = document.getElementById('myList');
    myList.innerHTML = '';
}
removeLi();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassTr() {
    const allTr = document.querySelectorAll('tr');
    allTr.forEach((element) => {
        element.classList.add('test');
    })
}
addClassTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) 
  dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(num) {
    string = '*';
    for (let i = 0; i < num; i++) {
        console.log(string);
        string += '*';
    }

}
halfTree(3);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) 
  dell'altezza fornita.

  Esempio:
  tree(3)

  *
 ***
*****

*/

function tree(num) {
    let string = '';
    let f = 1;
    let numFor = (num - 1) / 2;
    for (let l = 0; l < (num + 1) / 2; l++){
    for (let i = 0; i < ((num - f) / 2); i++) {
        string += ' ';
    }
    for(k = 0; k < f; k++){
         string += '*';
        
    }
    console.log(string);
    f += 2;
    string = '';
    }
}
tree(6);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero
    primo.
*/

function isItPrime(num){
    trovaDivisibile = false;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            trovaDivisibile = true;
        }
    }
    if(trovaDivisibile){
        return false;
    }
    else {
        return true;
    }

}

console.log(isItPrime (3331));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
