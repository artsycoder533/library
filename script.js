const newBookBtn = document.querySelector(".btn-new");
const cancelBtn = document.querySelector(".btn-cancel");
const submitBtn = document.querySelector(".btn-submit");
const modal = document.querySelector(".modal");

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

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    closeAddBookModal();
}

function displayBook(arr) {
    arr.forEach(function (book) {
        console.log(book);
        console.log(book.info());
    });
}

function openAddBookModal() {
    modal.classList.add("modal_open");
}

function closeAddBookModal() {
    modal.classList.remove("modal_open");
}

function displayBookToScreen() {
    
}

//addBookToLibrary();
displayBook(myLibrary);

function handleFormInput() {
    const form = document.querySelector(".form");
    const title = form.elements.namedItem("title").value;
    const author = form.elements.namedItem("author").value;
    const pages = form.elements.namedItem("pages").value;
    let read;
    if (form.elements.namedItem("yes").checked) {
        read = "read";
    }
    else {
        read = "has not read";
    }
    addBookToLibrary(title, author, pages, read);
}


//event listeners
newBookBtn.addEventListener("click", openAddBookModal);
cancelBtn.addEventListener("click", closeAddBookModal);
submitBtn.addEventListener("click", handleFormInput);
// modal.addEventListener("click", closeAddBookModal);
