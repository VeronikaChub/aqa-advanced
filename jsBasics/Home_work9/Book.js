export class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва книги повинна бути непорожнім рядком');
    }
    this._name = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор повинен бути непорожнім рядком');
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error('Рік повинен бути додатним цілим числом');
    }
    this._year = value;
  }
  
  static getOldestBook(books) {
  if (!Array.isArray(books) || books.length === 0) {
    return null;
  }

  return books.reduce((oldest, current) => {
    return current.year < oldest.year ? current : oldest;
  });
}

  printInfo() {
    console.log(`Назва: ${this.name}, Автор: ${this.author}, Рік: ${this.year}`);
  }
}

export default Book;