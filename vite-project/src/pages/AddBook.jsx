import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/store";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", category: "", description: "", rating: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    navigate("/books");
  };

  return (
    <div className="container">
      <h2>Add a New Book 📖</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input type="text" placeholder="Title" required onChange={(e) => setBook({ ...book, title: e.target.value })} />
        <input type="text" placeholder="Author" required onChange={(e) => setBook({ ...book, author: e.target.value })} />
        <input type="text" placeholder="Category" required onChange={(e) => setBook({ ...book, category: e.target.value })} />
        <textarea placeholder="Description" required onChange={(e) => setBook({ ...book, description: e.target.value })}></textarea>
        <input type="number" placeholder="Rating (0-5)" required onChange={(e) => setBook({ ...book, rating: e.target.value })} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
