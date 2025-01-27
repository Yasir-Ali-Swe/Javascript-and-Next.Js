// Library Management System
class Library {
    constructor() {
        this.books = [];
    }

    // Add a book to the library
    addBook(title, author, year) {
        const book = {
            id: this.books.length + 1,
            title,
            author,
            year,
        };
        this.books.push(book);
        console.log(`Book "${title}" added to the library.`);
    }

    // View all books
    viewBooks() {
        if (this.books.length === 0) {
            console.log("No books available in the library.");
            return;
        }
        console.log("Books in the library:");
        this.books.forEach((book) => {
            console.log(
                `ID: ${book.id}, Title: "${book.title}", Author: ${book.author}, Year: ${book.year}`
            );
        });
    }

    // Delete a book by ID
    deleteBook(id) {
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex === -1) {
            console.log(`No book found with ID: ${id}`);
            return;
        }
        const removedBook = this.books.splice(bookIndex, 1)[0];
        console.log(`Book "${removedBook.title}" removed from the library.`);
    }
}

// Create a new library instance
const myLibrary = new Library();

// Add books
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 1960);
myLibrary.addBook("1984", "George Orwell", 1949);
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// View books
myLibrary.viewBooks();

// Delete a book
myLibrary.deleteBook(2);

// View books after deletion
myLibrary.viewBooks();
