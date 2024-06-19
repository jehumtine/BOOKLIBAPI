// BookForm.js
import React, { useState } from 'react';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setISBN] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    fetch('http://localhost:8000/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isbn,title, author })
    })
      .then(response => response.json())
      .then(data => {
        setTitle('');
        setAuthor('');
        setISBN('');
        window.location.reload();
        // Add the new book to the list of books
      });
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label className='book-title'>
        Title:
        <input type="text" className='book-title' value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      <label className='book-author'>
        Author:
        <input type="text" value={author} onChange={event => setAuthor(event.target.value)} />
      </label>

      <label className='book-isbn'>
        ISBN:
        <input type="int" value={isbn} onChange={event => setISBN(event.target.value)} />
      </label>
      <button className='add-book-button' type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;