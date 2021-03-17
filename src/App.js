import './scss/App.scss';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Project} path="/project"></Route>
        <Route component={Contact} path="/contact"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
