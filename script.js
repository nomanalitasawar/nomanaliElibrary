const bookList = document.getElementById("book-list");
const addBookForm = document.getElementById("add-book-form");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const books = [
    {
        title: "Automata Theorey",
        author: "Jon Erickson",
        isbn: "978-1593271442"
    },
    {
        title: "Introduction to the Theory of Computation",
        author: "Michael Sipser",
        isbn: "978-1133187790"
    },
    {
        title: "python Programming",
        author: "Marijn Haverbeke",
        isbn: "978-1593279509"
    }
];

function updateBookList() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${index + 1}. <strong>${book.title}</strong> by ${book.author} ISBN: ${book.isbn}`;
        bookList.appendChild(li);
    });
}

updateBookList(); // Initial population of the book list

addBookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title && author && isbn) {
        // Check for duplicate entries and prevent them
        const isDuplicate = books.some((book) => book.title === title && book.author === author);
        if (isDuplicate) {
            alert("This book already exists in the list.");
            return;
        }

        const newBook = {
            title,
            author,
            isbn
        };
        books.push(newBook);

        updateBookList();
        addBookForm.reset();
    }
});

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
    });
    bookList.innerHTML = '';

    filteredBooks.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="bullet">⚫</span>${index + 1}. <strong>${book.title}</strong> by ${book.author} ISBN: ${book.isbn}`;
        bookList.appendChild(li);
    });
});
