import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="books" />
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}
      <div className="actions">
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default BookShow;
