const newBookBtn = document.querySelector(".btn-new");
const cancelBtn = document.querySelector(".btn-cancel");
const submitBtn = document.querySelector(".btn-submit");
const resetBtn = document.querySelector(".btn-reset");
const modal = document.querySelector(".modal");
const form = document.querySelector(".form");
const container = document.querySelector(".container_content");
const errorMessage = document.querySelector(".error");

let myLibrary = [];


class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}

	editReadStatus() {
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

	displayBookToScreen() {
		const card = document.createElement("article");
		card.classList.add("card");
		const cardInfo = document.createElement("div");
		cardInfo.classList.add("card_info");
		const cardTitle = document.createElement("h2");
		cardTitle.classList.add("card_title");
		cardTitle.textContent = this.title;
		const cardAuthor = document.createElement("p");
		cardAuthor.classList.add("card_author");
		cardAuthor.textContent = this.author;
		const cardPages = document.createElement("p");
		cardPages.classList.add("card_pages");
		cardPages.textContent = `${this.pages} pages`;
		const span = document.createElement("span");
		span.innerHTML = `<i class="fas fa-book-open"></i>`;
		cardInfo.append(cardTitle, cardAuthor, cardPages, span);
		const cardReadWrapper = document.createElement("div");
		cardReadWrapper.classList.add("card_read-wrapper");
		const cardRead = document.createElement("p");
		cardRead.classList.add("card_read");
		cardRead.textContent = this.read;
		const buttonEdit = document.createElement("button");
		buttonEdit.setAttribute("id", myLibrary.indexOf(this));
		buttonEdit.innerHTML = `<i class="fas fa-edit"></i>`;
		buttonEdit.classList.add("btn", "btn-edit");
		buttonEdit.addEventListener("click", this.editReadStatus.bind(this));
		cardReadWrapper.append(cardRead, buttonEdit);
		const buttonRemove = document.createElement("button");
		buttonRemove.setAttribute("id", myLibrary.indexOf(this));
		buttonRemove.innerHTML = `<i class="fas fa-trash-alt"></i>`;
		buttonRemove.classList.add("btn", "btn-remove");
		buttonRemove.addEventListener("click", this.removeBook);
		card.append(cardInfo, cardReadWrapper, buttonRemove);
		container.appendChild(card);
	}
}



function displayBook(arr) {
    arr.forEach(function (book) {
        book.displayBookToScreen();
    });
}



Book.prototype.removeBook = function() {
    myLibrary.splice(this.id, 1);
    container.children[this.id].remove();
    console.log(myLibrary);
    addToLocalStorage();
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
    newBook.displayBookToScreen();
    addToLocalStorage();
}

function clearFormInputs() {
    form.elements.namedItem("title").value = "";
    form.elements.namedItem("author").value = "";
    form.elements.namedItem("pages").value = "";
    form.elements.namedItem("yes").checked = false;
    form.elements.namedItem("no").checked = false;
    errorMessage.textContent = "";
}

function openAddBookModal() {
    modal.classList.add("modal_open");
    modal.nextElementSibling.classList.add("modal_content-show");
}

function closeAddBookModal() {
    modal.classList.remove("modal_open");
    modal.nextElementSibling.classList.remove("modal_content-show");
    clearFormInputs();
}

function handleFormInput() {
    const title = form.elements.namedItem("title").value;
    const author = form.elements.namedItem("author").value;
    const pages = form.elements.namedItem("pages").value;
    let read;
    let yes = form.elements.namedItem("yes").checked;
    let no = form.elements.namedItem("no").checked;
    if (title === "" || author === "" || pages === "" || pages <= 0 || (yes === false && no === false) ) {
        errorMessage.textContent = "Please enter valid input!";
        return;
    }
    if (form.elements.namedItem("yes").checked) {
        read = "read";
    }
    else {
        read = "has not read";
    }
    addBookToLibrary(title, author, pages, read);
    errorMessage.textContent = "";
}

function addToLocalStorage() {
    localStorage.setItem("library", JSON.stringify(myLibrary));
}

function retrieveFromLocalStorage() {
    const storedLibrary = JSON.parse(localStorage.getItem("library"));
    if (storedLibrary) {
        storedLibrary.forEach(function (book) {
            addBookToLibrary(book.title, book.author, book.pages, book.read);
        });
    }
}

//event listeners
newBookBtn.addEventListener("click", openAddBookModal);
cancelBtn.addEventListener("click", closeAddBookModal);
submitBtn.addEventListener("click", handleFormInput);
resetBtn.addEventListener("click", clearFormInputs);
modal.addEventListener("click", closeAddBookModal);
window.addEventListener("load", retrieveFromLocalStorage);
