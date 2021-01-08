'use strict';

function Book(namn, ämne, antalSidor, ISBNNummer) {
  this.namn = namn;
  this.ämne = ämne;
  this.antalSidor = antalSidor;
  this.ISBNNummer = ISBNNummer;
  this.getBookInfo = () =>
    console.log(
      `Book: ${this.namn} \nTopic: ${this.ämne} \nPages: ${this.antalSidor} \nISBN: ${this.ISBNNummer} \n`
    );
}

let bok = [];

bok.push(new Book('viking', 'serie', 200, 12345));
bok.push(new Book('programering 1', 'java', 350, 71256));
bok.push(new Book('programering ', 'Javascript & jqurey', 377, 12356));

const nyböcker = prompt('Hur många böcker vill du lägga till?');

if (nyböcker > 0) {
  for (let i = 1; i <= nyböcker; i++) {
    const namn = prompt(`Book ${i} \nThe name of the book:`);
    const ämne = prompt(`Book ${i} \nThe subject of the book:`);
    const antalSidor = prompt(`Book ${i} \nNumber of pages:`);
    const ISBNNummer = prompt(`Book ${i} \nISBN:`);

    bok.push(new Book(namn, ämne, antalSidor, ISBNNummer));
  }
  console.log(`${nyböcker} new book(s) added.\n\n`);
}
bok.forEach((bok) => bok.getBookInfo() + console.log('-----------'));
