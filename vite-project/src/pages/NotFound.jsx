import { Link } from 'react-router-dom';
import '../styles/styles.css';

function NotFound() {
  return (
    <div className="container not-found">
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
