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
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Attualitaepolitica} path="/attualitaepolitica" />
        <Route component={Internazionale} path="/internazionale" />
        <Route component={Societa} path="/societa" />
        <Route component={Ambiente} path="/ambiente" />
        <Route component={Profili} path="/profili" />
      </Switch>
    </Router>
  );
}

export default App;
