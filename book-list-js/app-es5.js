// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// UI prototype functions
UI.prototype.addBookToList = function(book) {
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

UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    //timeout for 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove()
    }, 3000);
}

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete-row') {
        target.parentElement.parentElement.remove();
    }
}


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
        ui.showAlert('Book Added!', 'success');
        ui.clearFields();
    }

    event.preventDefault();
});

// Event listener to delete book from list
document.getElementById('book-list').addEventListener('click', function(event) {
    const ui = new UI();
    ui.deleteBook(event.target);
    ui.showAlert('Book removed from list', 'success');

    event.preventDefault();
});