// BookList.js
import React, { useState, useEffect } from 'react';
import Book from './Book'

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/books/')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  const handleDelete = isbn => {
    fetch(`http://localhost:8000/books/${isbn}/`,{
        method: 'DELETE'
    })
    .then(response =>{
        if (response.ok){
            setBooks(books.filter(book => book.isbn != isbn));
        }
    });    
  };

  const handleUpdate = (isbn, updatedBook) => {
    const updatedBookWithIsbn = {...updatedBook, isbn};
    fetch(`http://localhost:8000/books/${isbn}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBookWithIsbn)
    })
     .then(response => response.json())
     .then(data => {
        setBooks(books.map(book => book.isbn == isbn? data : book));
      });
  };


  return (
    <div className='book-list'>
      {books.map(book => (
      
      <Book
        key={book.isbn}
        book={book}
        onDelete={() => handleDelete(book.isbn)}
        onEdit={(updatedBook) => handleUpdate(book.isbn, updatedBook)}
/>
      ))}
    </div>
  );
}

export default BookList;