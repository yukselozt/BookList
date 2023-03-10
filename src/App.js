import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import BookDetails from "./components/BookDetails";
import "./styles/styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/book-details" element={<BookDetails />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
