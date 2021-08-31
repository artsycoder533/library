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
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

Book.prototype.editReadStatus = function () {
	let status = this.previousElementSibling.textContent;
	console.log(status);
	if (status === "read") {
		status = "has not read";
	} else if (status === "has not read") {
		status = "read";
	}
	this.previousElementSibling.textContent = status;
}

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
    displayBookToScreen(newBook);
}

function displayBook(arr) {
    arr.forEach(function (book) {
        console.log(book);
        console.log(book.info());
    });
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

function displayBookToScreen(book) {
    const card = document.createElement("article");
    card.classList.add("card");
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card_title");
    cardTitle.textContent = book.title;
    const cardAuthor = document.createElement("h3");
    cardAuthor.classList.add("card_author");
    cardAuthor.textContent = book.author;
    const cardPages = document.createElement("h4");
    cardPages.classList.add("card_pages");
    cardPages.textContent = book.pages;
    const cardRead = document.createElement("h4");
    cardRead.classList.add("card_read");
    cardRead.textContent = book.read;
    const buttonEdit = document.createElement("button");
    buttonEdit.setAttribute("id", myLibrary.indexOf(book));
    buttonEdit.textContent = "Edit";
    buttonEdit.classList.add("btn", "btn-edit");
    buttonEdit.addEventListener("click", book.editReadStatus);
    const buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("id", myLibrary.indexOf(book));
    buttonRemove.textContent = "Remove";
    buttonRemove.classList.add("btn", "btn-remove");
    buttonRemove.addEventListener("click", removeBook);
    card.append(cardTitle, cardAuthor, cardPages, cardRead, buttonEdit, buttonRemove);
    container.appendChild(card);
}

function removeBook() {
    myLibrary.splice(this.id, 1);
    container.children[this.id].remove();
    console.log(myLibrary);
}


// displayBook(myLibrary);

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


//event listeners
newBookBtn.addEventListener("click", openAddBookModal);
cancelBtn.addEventListener("click", closeAddBookModal);
submitBtn.addEventListener("click", handleFormInput);
resetBtn.addEventListener("click", clearFormInputs);
// modal.addEventListener("click", closeAddBookModal);
