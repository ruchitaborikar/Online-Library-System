import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import "../styles/styles.css";

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <div className="container book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <Link to="/books" className="back-button">⬅ Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
