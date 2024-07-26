const FAVOURITES_KEY = "Favourites";

// Load Favourites from sessionStorage on page load
function loadFavourites() {
    const storedFavourites = sessionStorage.getItem(FAVOURITES_KEY);
    if (storedFavourites) {
        return JSON.parse(storedFavourites);
    }
    return [];
}

// Save Favourites to sessionStorage
function saveFavourites() {
    sessionStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
}

// Initialize favourites with data from sessionStorage
const favourites = loadFavourites();

function removeBookFromFavourites(bookCode) {
    favourites.forEach((favourite) => {
        const index = favourite.books.indexOf(bookCode);
        if (index !== -1) {
            favourite.books.splice(index, 1);
        }
    });
    saveFavourites();
    displayFavourites();
}

function deleteFavourites(favouriteId) {
    const index = favourites.findIndex(favourite => favourite.id === favouriteId);
    if (index !== -1) {
        favourites.splice(index, 1);
        saveFavourites();
        displayFavourites();
    }
}

function displayFavourites() {
    const favouritesContainer = document.getElementById("favouritesContainer");
    favouritesContainer.innerHTML = ""; // Clear previous favourites
    favourites.forEach((favourite) => {
        const favouriteElement = createFavouritesElement(favourite);
        favouritesContainer.appendChild(favouriteElement);
    });
}

function createFavourites(name) {
    const favourite = {
        id: favourites.length + 1,
        name: name,
        books: [],
    };
    favourites.push(favourite);
    saveFavourites();

    const favouriteElement = createFavouritesElement(favourite);
    const favouritesContainer = document.getElementById("favouritesContainer");
    favouritesContainer.appendChild(favouriteElement);
}

function createFavouritesElement(favourite) {
    const favouritesElement = document.createElement("div");
    favouritesElement.classList.add("favourites");

    const favouritesName = document.createElement("h3");
    favouritesName.textContent = favourite.name;

    const booksContainer = document.createElement("div");
    booksContainer.classList.add("books-container");

    favourite.books.forEach((bookCode) => {
        const book = book_database[bookCode];
        const bookElement = createBookPost(book, favourite); // Pass the favourite to createBookPost
        booksContainer.appendChild(bookElement);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        deleteFavourites(favourite.id); // Changed from favourite.code to favourite.id
    });

    favouritesElement.appendChild(favouritesName);
    favouritesElement.appendChild(booksContainer);
    favouritesElement.appendChild(deleteButton);

    return favouritesElement; // Ensure the created element is returned
}

// Initial display of favourites
displayFavourites();
