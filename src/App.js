import React, { useEffect, useState } from "react";
import "./App.css";

const BOOK_API_URL = "https://gutendex.com/books/";

const getBooks = async () => {
  const bookResponse = await fetch(BOOK_API_URL).then((response) =>
    response.json()
  );
  console.log(bookResponse);
  return bookResponse.results;
};

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const execute = async () => {
      const _books = await getBooks();
      setBooks(_books);
    };

    execute();
  }, []);
  console.log(books);
  return (
    <div className="App">
      {books.map((book) => (
        <div>{book.title}</div>
      ))}
    </div>
  );
}

export default App;
