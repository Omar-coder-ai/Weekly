import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Topbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
