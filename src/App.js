import "./App.css";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { NavBar } from "./components/navBar/navBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
