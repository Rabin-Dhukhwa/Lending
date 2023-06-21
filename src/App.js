import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { SignUp } from "./pages/signin-signup/SignUp";
import { SignIn } from "./pages/signin-signup/SignIn";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { BookLanding } from "./pages/landing/BookLanding";
import BookList from "./pages/books/BookList";
import NewBooks from "./pages/books/NewBooks";
import BurrowHistory from "./pages/burrow-history/BurrowHistory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* {public routers} */}
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="book/:bookId" element={<BookLanding />} />

        {/* {private routers} */}

        {/* all logged in access  */}
        <Route path="burrow-history" element={<BurrowHistory />} />

        {/* only admin access  */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin/books" element={<BookList />} />
        <Route path="admin/new" element={<NewBooks />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
