class Book {
    constructor(Id, Title, Author, Read) {
        this.Id = Id;
        this.Title = Title;
        this.Author = Author;
        this.Read = Read;
    }
}

class Library {
    constructor() {
        this.Book_Count = 0;
        this.Books_Arr = [];
    }

    //I probably did something wrong because this doesn't seem to do anything.
    markRead(checkbox, id) {
        for (let i = 0; i < this.Books_Arr.length; i++) {
            if (id === this.Books_Arr[i].id) {
                this.Books_Arr[i].Read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        }
    }

    addBook() {

        //Select html elements
        const bookTitle = document.getElementById("titleID").value;
        const bookAuthor = document.getElementById("authorID").value;
        const bookRead = document.getElementById("readLibraryCheckbox").checked;

        //Creates new Book class instance
        const addNewBook = new Book(this.Book_Count + 1, bookTitle, bookAuthor, bookRead);

        //Creates new table row element
        const newTR = document.createElement("tr");

        //Creates new table data elements
        const cellT = document.createElement("td");
        const cellA = document.createElement("td");
        const cellR = document.createElement("td");

        //Appends html elements to table data tags
        cellT.append(addNewBook.Title);
        cellA.append(addNewBook.Author);
        cellR.append(addNewBook.Read);

        //Appends table data to new table row tag
        newTR.append(cellT, cellA, cellR);

        //Selects table body and appends the new table row
        const selectTable = document.getElementById("tbodyID");
        selectTable.appendChild(newTR);

        this.Book_Count += 1;
    }
}

//Creates new library instance. Selects submit button. Adds event listener to check when pressed. Prevents data from going into search bar. Adds new book
const newLibrary = new Library();
const addButton = document.getElementById("buttonID");
addButton.addEventListener("click", (event) => {
    event.preventDefault();

    newLibrary.addBook();
});