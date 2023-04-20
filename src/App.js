import { Route, Routes } from "react-router-dom";
import "./App.css";

import { LoginSignUpPage } from "./pages/LoginSignUp";
import { HomePage } from "./pages/Home";
import { IndividualCardPage } from "./pages/IndividualCardPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginSignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pokemonft/:id" element={<IndividualCardPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
