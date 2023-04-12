import "./App.css";
// import { LoginSignUp } from "./components/loginSignUp/loginSignUp";
import { NavBar } from "./components/navBar/navBar";
// import { Home } from "./components/home/home";
import { IndividualCards } from "./components/individualCards/individualCards";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="app">
      {/* <LoginSignUp /> */}
      <NavBar />
      {/* <Home /> */}
      <IndividualCards />
      <Footer />
    </div>
  );
}

export default App;
