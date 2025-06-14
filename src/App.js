import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

export default function componentName() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("New Book Created", title);
  };

  return (
    <>
      <BookCreate onCreate={createBook} />
    </>
  );
}
