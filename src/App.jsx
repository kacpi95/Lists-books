import { useState } from 'react';
import BooksForm from './components/BooksForm/BooksForm';
import BooksList from './components/BooksList/BooksList';
import { shortid } from 'shortid';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'of Mice and Men',
      author: 'John Steinbeck',
    },
    {
      id: 2,
      title: 'the Witcher',
      author: 'Andrzej Sapkowski',
    },
  ]);

  const removeBook = (bookID) => {
    setBooks(books.filter((book) => book.id !== bookID));
  };
  const addBook = (newBook) => {
    setBooks([
      ...books,
      { id: shortid, title: newBook.title, author: newBook.author },
    ]);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <BooksList books={books} removeBook={removeBook} />
      <BooksForm addBook={addBook} />
    </div>
  );
}

export default App;
