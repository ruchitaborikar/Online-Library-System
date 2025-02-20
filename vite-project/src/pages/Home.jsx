import { Link } from "react-router-dom";
import "../styles/styles.css";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "History", "Biography"];

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Online Library 📖</h1>
      <h2>Explore Books by Category</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
