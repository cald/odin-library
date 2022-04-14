const container = document.getElementById("container");
const template = document.getElementById("card-template");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

theHobbit = new Book("The Hobbit", "JRR Tolkein", 297, false);
goneWithTheWind = new Book("Gone With The Wind", "Margaret Mitchell", 500, false);
janeEyre = new Book("Jane Eyre", "Charlotte Bronte", 632, false);
prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 182, false);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(goneWithTheWind);
addBookToLibrary(janeEyre);
addBookToLibrary(prideAndPrejudice);

function displayBooks() {
    myLibrary.forEach((book) => {
        let clone = template.content.cloneNode(true);
        for (const [property, value] of Object.entries(book)) {
            let element = clone.querySelector(`.${property}`);
            element.textContent = book[property];
        }
        container.appendChild(clone);
    });
}

displayBooks();