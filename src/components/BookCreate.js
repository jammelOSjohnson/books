import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const [title, setTile] = useState("");
  const { createBook } = useBooksContext();
  const handleChange = (event) => {
    setTile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTile("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>
          Create!
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
