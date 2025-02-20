import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../data/books";
import "../styles/styles.css";

const BrowseBooks = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Browse Books 📚</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <ul className="book-list">
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <Link to={`/book/${book.id}`} className="view-details">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;
