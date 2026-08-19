import Book from './Book.js';
import EBook from './EBook.js';

// 1. Створюємо екземпляри книг
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('1984', 'George Orwell', 1949);
const ebook1 = new EBook('Woo', 'F. Scott Fitzgerald', 1921, 'pdf');


console.log('--- Інформація про книги ---');
book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();


console.log('\n--- Найдавніша книга ---');
const booksArray = [book1, book2, book3, ebook1];
const oldestBook = Book.getOldestBook(booksArray);


oldestBook.printInfo(); 

console.log('\n--- Створення EBook із звичайної книги ---');
const convertedEBook = EBook.createFromBook(book1, 'epub');
convertedEBook.printInfo();