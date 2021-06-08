import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <main>
          <Route path="/Home" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
