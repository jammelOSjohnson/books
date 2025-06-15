// Import necessary dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

// Main App component
export default function componentName() {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // Function to create a new book
  const createBook = async (title) => {
    // Make POST request to create new book
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    // Update books state with new book
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  // Function to fetch all books from the server
  const fetchBooks = async () => {
    // Make GET request to retrieve all books
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  // Function to delete a book by its ID
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    // Filter out the book with matching ID
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  // Function to edit a book's title
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    // Map through books and update the matching book's title
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Effect hook to fetch books when component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Render the app UI
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
