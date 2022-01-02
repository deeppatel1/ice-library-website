import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import SearchPage from './pages/Search'
import HomePage from './pages/Home'

export default function App() {
  return (
    <nav>
      <Link to="/search">Search</Link> |{" "}
    </nav>
  );
}