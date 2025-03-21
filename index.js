// Function to fetch book data from the API
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
  // Fetch data from the API and return the fetch promise
  return fetch("https://anapioficeandfire.com/api/books") // Sends a GET request to the API
    .then(response => response.json()) // Parses the response as JSON
    .then(data => renderBooks(data)); // Calls renderBooks function with the fetched book data
}

// Function to display the fetched books on the webpage
function renderBooks(books) {
  // Select the <main> element from the HTML document
  const main = document.querySelector('main');
  
  // Loop through each book object in the array
  books.forEach(book => {
    // Create a new <h2> element
    const h2 = document.createElement('h2');

    // Set the inner HTML of the <h2> element to the book's name
    h2.innerHTML = book.name;

    // Append the <h2> element to the <main> element
    main.appendChild(h2);
  });
}

// Wait until the DOM (HTML structure) is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  // Call fetchBooks function to get and display the books
  fetchBooks();
});
