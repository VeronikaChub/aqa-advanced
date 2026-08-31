import  Book  from './Book.js';

export default class EBook extends Book {
  constructor(name, author, year, format) {
    super(name, author, year);
    this.format = format;
  }
   get format() {
        return this._format;
    }
    set format(value) {
        const allowedFormats = ["pdf", "epub", "fb2"];

        if (!allowedFormats.includes(value)) {
            throw new Error("Формат повинен бути pdf, epub або fb2");
        }

        this._format = value;
    }

static createFromBook(bookInstance, format) {
  if (!(bookInstance instanceof Book)) {
    throw new Error('Перший аргумент повинен бути екземпляром класу Book');
  }
  
  return new EBook(bookInstance.name, bookInstance.author, bookInstance.year, format);
}
  printInfo() {
    console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.format}`);
  }
}

