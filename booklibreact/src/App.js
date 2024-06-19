// App.js
import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import './styles.css'

function App() {
  return (
    <div>
      <h2>Book List</h2>
      <BookList />
      <h2> Add A New Book</h2>
      <BookForm />
    </div>
  );
}

export default App;