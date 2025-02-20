import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">📚 Online Library</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/books">Browse Books</Link>
          <Link to="/add-book">Add Book</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
