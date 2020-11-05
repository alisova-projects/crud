const BASE_URL = 'http://localhost:4040';

/*
const options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ title: 'Самая большая новая тестовая книга по HTML' })
};

fetch(`${BASE_URL}/books/13`, options)
  .then(res => res.json())
  .then(console.log);
  */

function updateBookById (update, bookId) {
  const options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(update)
  }
  
  return fetch(`${BASE_URL}/books/${bookId}`, options)
  .then(res => res.json())
  .then(console.log);
}

// функция generic - что обновить и у кого обновить
updateBookById({ title: 'Большая новая книга по NODEJS' }, 19);

updateBookById({ rating: 1 }, 18);

updateBookById({ rating: 4, author: 'Манго' }, 17);
