let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBookToLibrary() {
    const title = prompt("Enter Title:", "");
    const author = prompt("Enter Author:", "");
    const pages = +prompt("Enter Pages:", 0);
    let read = prompt("Have you read the book?:", "");
    if (read === "yes") {
        read = "read";
    }
    else {
        read = "not read yet";
    }

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook(arr) {
    arr.forEach(function (book) {
        console.log(book);
        console.log(book.info());
    });
}

//addBookToLibrary();
displayBook(myLibrary);



