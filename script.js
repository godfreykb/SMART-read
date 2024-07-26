// script.js

// Function to create a book post element
function createBookPost(book) {
    const bookPost = document.createElement('div');
    bookPost.classList.add('book-post');
  
    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.name;
  
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;
  
    const bookGenre = document.createElement('p');
    bookGenre.textContent = `Genre: ${book.genre}`;
  
    const plusButton = document.createElement('button');
    plusButton.className = 'add_button';
    plusButton.textContent = '+';
    plusButton.setAttribute('aria-label', 'Add to favourites');
    plusButton.addEventListener('click', () => {
        const selectedFavourites = selectFavourites();
        if (selectedFavourites) {
            addBookToFavourites(book, selectedFavourites);
        }
    });
  
    // Append elements to the book post container
    bookPost.appendChild(bookTitle);
    bookPost.appendChild(bookAuthor);
    bookPost.appendChild(bookGenre);
    bookPost.appendChild(plusButton);
  
    return bookPost;
}
  
// Function to display the book feed
function displayBookFeed() {
    // Check if the current page is feed.html
    const currentPath = window.location.pathname;
    const isFeedPage = currentPath.endsWith('feed.html');
  
    if (isFeedPage) {
        const feedContainer = document.querySelector('.feed');
        feedContainer.innerHTML = ''; // Clear previous feed
  
        for (const bookCode in book_database) {
            if (book_database.hasOwnProperty(bookCode)) {
                const book = book_database[bookCode];
                const bookPostElement = createBookPost(book);
                feedContainer.appendChild(bookPostElement);
            }
        }
    }
}
  
// Function to search for books
function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous search results
  
    // Loop through the book_database to find matching books
    for (const bookCode in book_database) {
        if (book_database.hasOwnProperty(bookCode)) {
            const book = book_database[bookCode];
            const bookName = book.name.toLowerCase();
  
            // Check if the book name contains the search input as a substring
            if (bookName.includes(searchInput)) {
                // Create a new book post element
                const bookElement = document.createElement('div');
                bookElement.classList.add('book');
  
                // Create book details
                const bookTitle = document.createElement('h2');
                bookTitle.textContent = book.name;
  
                const bookAuthor = document.createElement('p');
                bookAuthor.textContent = `Author: ${book.author}`;
  
                const bookGenre = document.createElement('p');
                bookGenre.textContent = `Genre: ${book.genre}`;
  
                // Create the add button
                const addButton = document.createElement('button');
                addButton.className = 'add_button';
                addButton.textContent = '+';
                addButton.setAttribute('aria-label', 'Add to favourites');
                addButton.addEventListener('click', () => {
                    const selectedFavourites = selectFavourites();
                    if (selectedFavourites) {
                        addBookToFavourites(book, selectedFavourites);
                    }
                });
  
                // Append the book details and add button to the book post container
                bookElement.appendChild(bookTitle);
                bookElement.appendChild(bookAuthor);
                bookElement.appendChild(bookGenre);
                bookElement.appendChild(addButton);
  
                // Append the book post element to the search results container
                searchResultsContainer.appendChild(bookElement);
            }
        }
    }
  
    // Display no results message if no books match the search query
    if (searchResultsContainer.children.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No results found.';
        searchResultsContainer.appendChild(noResults);
    }
}
  
// Displays book feed when this page is loaded
document.addEventListener('DOMContentLoaded', displayBookFeed);
