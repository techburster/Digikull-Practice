
// Dom element
const input1 = document.getElementById("bName")
const input2 = document.getElementById("aName")
const input3 = document.getElementById("isbnNumber")
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
// const table = document.getElementById("tab")


class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author;
        this.isbn = isbn;

    }



}

class Library {
    constructor() {
        this.books = [];
    }

    addbook(book) {
        this.books.push(book);

    }
    removeBooks(isbn) {

        // remove the task

        // filter the task
        let Bk = this.books
        for (let i = 0; i < Bk.length; i++) {
            if (Bk[i].isbn == isbn) {
                // we will remove the item from the array
                this.books.splice(i, 1);
            }
        }

    }

    listBooks() {
        return this.books;
    }

}
let library = new Library();

// We will create objects
let book1

btn.addEventListener("click", function () {
    book1 = new Book(input1.value, input2.value, input3.value);
    console.log(input1.value, input2.value, input3.value);

    library.addbook(book1);

})

let i=1;
btn2.addEventListener("click", function () {
    
    console.log(library.listBooks());
    let data=library.listBooks();


    const table = document.getElementById("tab").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3) ;
    cell1.innerHTML = i; 
    i++;  
    console.log(i);
    cell2.innerHTML = data[0].Book.title;
    cell3.innerHTML=data[i-1].Book.author;
    cell4.innerHTML=data[i-1].Book.isbn;
    
})




//console.log(taskmanager.listTasks());
// library.removeBooks("CBE556");

