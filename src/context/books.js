import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // Function to fetch all books from the server
  const fetchBooks = useCallback(async () => {
    // Make GET request to retrieve all books
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

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

  // Function to delete a book by its ID
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    // Filter out the book with matching ID
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

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

  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
