📚 Online Library System

This is an Online Library System built using React with Redux for state management. The application allows users to browse books, view details, add new books, and handle unknown routes with a 404 page.

🌟 Features

✅ Home Page: Displays book categories and popular books.
✅ Browse Books: Lists all books with filtering and search functionality.
✅ Book Details: Shows detailed information about a selected book.
✅ Add Book: Allows users to add new books (managed with Redux).
✅ 404 Page: Handles invalid routes.

📁 Project Structure

OnlineLibrarySystem/
│── src/
│   │── components/
│   │   │── Navbar.jsx
│   │── data/
│   │   │── books.jsx
│   │── pages/
│   │   │── Home.jsx
│   │   │── BrowseBooks.jsx
│   │   │── BookDetails.jsx
│   │   │── AddBook.jsx
│   │   │── NotFound.jsx
│   │── redux/
│   │   │── store.jsx
│   │── styles/
│   │   │── styles.css
│   │── App.jsx
│   │── main.jsx
│── index.html
│── package.json
│── README.md

▶️ How to Run the Application

1️⃣ Open the terminal and navigate to the project folder:

cd online-library-system

2️⃣ Run the development server:

npm run dev

3️⃣ Open your browser and go to:

http://localhost:5173

4️⃣ You can now navigate through the application and test its features.
⚙️ Installation and Setup


🛠️ Issues & Debugging

❌ If "Browse Books" Shows "Page Not Found"

Ensure <BrowserRouter> is wrapped around <App /> in main.jsx.

Add this to vite.config.js (if needed):

export default {
  server: {
    historyApiFallback: true,
  },
};

Restart the server:

npm run dev

❌ If "Add Book" Does Not Work

Ensure Redux is properly set up in store.jsx.

Check if the dispatch function updates the state in Redux.

Try adding console.log in Redux actions to debug.

📜 License

This project is licensed under the MIT License.

✨ Happy Coding! 🚀📚
