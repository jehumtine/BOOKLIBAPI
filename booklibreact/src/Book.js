import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button'

function Book({ book, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = event => {
    event.preventDefault();
    onEdit({ title, author });
    setEditing(false);
  };


  return (
    <div>
    {editing? (
      <form onSubmit={handleSubmit}>
        <label className='book-info'>
          Title:
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={event => setAuthor(event.target.value)} />
        </label>
        <Button type="submit">
            <FontAwesomeIcon icon = {faPencilAlt} /> Save  
            </Button>
      </form>
    ) : (
        
      <div className='book-item'>
        <div className='book-info'>
        <span className='book-title'>{book.title}</span> by <span>{book.author}</span>
        </div>
        <div className='book-actions'>
        <button className='delete-button' onClick={() => onDelete(book.isbn)}>
            <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
        <button className='edit-button' onClick={() => setEditing(true)}>
            <FontAwesomeIcon icon={faPencilAlt} />Edit
            </button>
            </div>    
            </div>
      
    )}
  </div>
  );
}

export default Book;