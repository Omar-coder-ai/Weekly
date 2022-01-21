import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Attualitaepolitica from "./pages/Attualitaepolitica";
import Internazionale from "./pages/Internazionale";
import Societa from "./pages/Societa";
import Ambiente from "./pages/Ambiente";
import Profili from "./pages/Profili";

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
      <Footer />
    </Router>
  );
}

export default App;
