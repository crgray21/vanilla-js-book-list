// Book Constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Constructor
class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete-row">X</td>
            `;
    
        list.appendChild(row);
    }
    
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
    
        //timeout
        setTimeout(function() {
            document.querySelector('.alert').remove()
        }, 3000);
    }
    
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    
    }
    
    deleteBook(target) {
        if (target.className === 'delete-row') {
            target.parentElement.parentElement.remove();
        }
    }
}

// Local storage class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach(function(book) {
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));        
    }
}


// DOM Load Event to load local storage items
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event listener to add book to list
document.getElementById('book-form').addEventListener('submit', function(event) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if (title === '' || author === '' || isbn === '' ){
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book); 
        Store.addBook(book);
        ui.showAlert('Book Added!', 'success');
        ui.clearFields();
    }

    event.preventDefault();
});

// Event listener to delete book from list
document.getElementById('book-list').addEventListener('click', function(event) {
    const ui = new UI();
    ui.deleteBook(event.target);
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book removed from list', 'success');

    event.preventDefault();
});