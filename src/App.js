import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";

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
