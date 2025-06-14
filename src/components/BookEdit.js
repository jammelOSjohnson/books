import React, { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //onSave(book.id, title);
  };

  return (
    <form className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary" onSubmit={handleSubmit}>
        Save
      </button>
    </form>
  );
}

export default BookEdit;
