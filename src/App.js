// Import necessary dependencies
import React, { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

// Main App component
export default function componentName() {
  const { fetchBooks } = useContext(BooksContext);
  // Effect hook to fetch books when component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Render the app UI
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
