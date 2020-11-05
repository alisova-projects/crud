const BASE_URL = 'http://localhost:4040';

  function fetchBooks () {
    return fetch(`/books`)
  .then(res => res.json())
  .then(console.log);
  }

  function fetchBookId (bookId) {
    return fetch(`${BASE_URL}/books/${bookId}`)
  .then(res => res.json())
  .then(console.log);
  }

fetchBooks();
fetchBookId(2);
fetchBookId(4);