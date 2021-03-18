import './scss/App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Projects} path="/projects"></Route>
        <Route component={Contact} path="/contact"></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
