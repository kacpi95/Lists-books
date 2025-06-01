import { useState } from 'react';

export default function BooksForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author });
    setAuthor('');
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button>Add book</button>
    </form>
  );
}
