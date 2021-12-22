import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Topbar />
      <Home />
    </Router>
  );
}

export default App;
