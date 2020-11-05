const BASE_URL = 'http://localhost:4040';

const newBook = {
"title": "Test book-2",
"author": "Me",
"genres": ["test-2"],
"rating": 9,
}

function addBook (book) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options)
  .then(res => res.json())
}

addBook(newBook).then(renderBook);

// или так:

addBook({
  "title": "Test book-3",
  "author": "Me",
  "genres": ["test-3"],
  "rating": 8.5,
}).then(renderBook)
  .catch(error => console.log(error))
  .finally(() => console.log('finished!'));

function renderBook(book) {
  console.log('Пришёл ответ от бекенда, можно рисовать');
  console.log(book);
};