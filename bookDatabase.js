// bookDatabase.js

// Function to generate a random book name
function selectBook(i) {
  const bookNames = [
    "Harry Potter and the Goblet of Fire", "A Wrinkle in Time", "The Mill on the Floss",
    "The Sound and the Fury", "The Great Gatsby", "The Two Towers",
    "Catch-22", "Hard Times", "The Sun Also Rises", "The Good Earth",
    "Twilight", "War and Peace", "Crime and Punishment", "A Passage to India",
    "Jude the Obscure", "Don Quixote", "Rebecca", "Ethan Frome", "Frankenstein",
    "Robinson Crusoe", "Hatchet", "The Portrait of a Lady", "1984",
    "The Outsiders", "Ben-Hur", "The Castle",
    "The Bell Jar", "Women in Love", "The Yearling",
    "Sister Carrie", "Of Human Bondage", "Les Misérables", "The Invisible Man",
    "Holes", "Adam Bede", "The Book Thief", "Catching Fire",
    "The Help", "The Lovely Bones", "Gone with the Wind"
  ];

  // Use modulo operator to handle indices greater than the length of bookNames
  return bookNames[(i - 1) % bookNames.length];
}

// Function to generate a random book author
function generateRandomAuthor() {
  const firstNames = [
    "Anthony", "Bruno", "Elvis", "Jeremy", "John", "Jade", "Ethan", "Phillipa",
    "Gabriel", "Linda", "Zack", "Nathan", "Richard", "Susan", "Charles", "Adam",
    "William", "Bobby", "Franklin", "Quincy"
  ];

  const lastNames = [
    "Wilder", "Stocklett", "Trollope", "Proust", "Faulkner", "Wharton", "Taylor",
    "Collins", "Larson", "Martinez", "Forster", "Adams", "Steinbeck", "Warren",
    "Dickens", "Thomas", "Taylor", "Moore", "Lewis", "Jones"
  ];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
}

// Function to generate a random genre
function pickGenre() {
  const genres = ["Horror", "Comedy", "Drama", "Romance", "Blockbuster", "Thriller", "Fiction", "Non-fiction", "Biography", "Documentary"];

  return genres[Math.floor(Math.random() * genres.length)];
}

// Function to generate 40 books and store them in the book_database object
function generateBooks() {
  const book_database = {};

  for (let i = 1; i <= 40; i++) {
      const book = {
          code: i,
          name: selectBook(i),
          author: generateRandomAuthor(),
          genre: pickGenre(),
      };

      book_database[i] = book;
  }

  return book_database;
}

// Generate the books and store them in the book_database object
const book_database = generateBooks();

// Export the book_database object 
console.log(book_database);
