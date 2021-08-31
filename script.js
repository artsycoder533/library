const newBookBtn = document.querySelector(".btn-new");
const cancelBtn = document.querySelector(".btn-cancel");
const submitBtn = document.querySelector(".btn-submit");
const resetBtn = document.querySelector(".btn-reset");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");
const container = document.querySelector(".container_content");

let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    // }
}

Book.prototype.editReadStatus = function () {
    console.log(this.read);
    let status = this.read;
	// let status = this.previousElementSibling.textContent;
	console.log(status);
	if (status === "read") {
        status = "has not read";
        this.read = `${status}`;
	} else if (status === "has not read") {
        status = "read";
        this.read = `${status}`;
    }
    // this.previousElementSibling.textContent = status;
    addToLocalStorage();
    const changeStatus = container.children[myLibrary.indexOf(this)];
    changeStatus.querySelector(".card_read").textContent = `${status}`;
    //console.log(container.children[myLibrary.indexOf(this)]);
}

// function displayBook(arr) {
//     arr.forEach(function (book) {
//         console.log(book);
//         console.log(book.info());
//     });
// }

Book.prototype.displayBookToScreen = function () {
    const card = document.createElement("article");
    card.classList.add("card");
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card_title");
    cardTitle.textContent = this.title;
    const cardAuthor = document.createElement("h3");
    cardAuthor.classList.add("card_author");
    cardAuthor.textContent = this.author;
    const cardPages = document.createElement("h4");
    cardPages.classList.add("card_pages");
    cardPages.textContent = `${this.pages} pages`;
    const cardRead = document.createElement("h4");
    cardRead.classList.add("card_read");
    cardRead.textContent = this.read;
    const buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("id", myLibrary.indexOf(this));
    buttonEdit.textContent = "Edit";
    buttonEdit.classList.add("btn", "btn-edit");
    buttonEdit.addEventListener("click", this.editReadStatus.bind(this));
    const buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("id", myLibrary.indexOf(this));
    buttonRemove.textContent = "Remove";
    buttonRemove.classList.add("btn", "btn-remove");
    buttonRemove.addEventListener("click", this.removeBook);
    card.append(cardTitle, cardAuthor, cardPages, cardRead, buttonEdit, buttonRemove);
    container.appendChild(card);
}

Book.prototype.removeBook = function() {
    myLibrary.splice(this.id, 1);
    container.children[this.id].remove();
    console.log(myLibrary);
    addToLocalStorage();
}


// displayBook(myLibrary);

function addBookToLibrary(title, author, pages, read) {
    const newBook = Object.create(Book.prototype);
    newBook.title = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.read = read;
    // const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    closeAddBookModal();
    clearFormInputs();
    newBook.displayBookToScreen();
    addToLocalStorage();
}

function clearFormInputs() {
    form.elements.namedItem("title").value = "";
    form.elements.namedItem("author").value = "";
    form.elements.namedItem("pages").value = "";
    form.elements.namedItem("yes").checked = false;
    form.elements.namedItem("no").checked = false;
}

function openAddBookModal() {
    modal.classList.add("modal_open");
}

function closeAddBookModal() {
    modal.classList.remove("modal_open");
}

function handleFormInput() {
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

function addToLocalStorage() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

//event listeners
newBookBtn.addEventListener("click", openAddBookModal);
cancelBtn.addEventListener("click", closeAddBookModal);
submitBtn.addEventListener("click", handleFormInput);
resetBtn.addEventListener("click", clearFormInputs);
// modal.addEventListener("click", closeAddBookModal);
