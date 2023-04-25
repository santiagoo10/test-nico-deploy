import "./App.css";

import { Route, Routes } from "react-router-dom";

import { LoginSignUpPage } from "./pages/LoginSignUp";
import { HomePage } from "./pages/Home";
import { IndividualCardPage } from "./pages/IndividualCardPage";
import { ErrorPage } from "./pages/ErrorPage";

import { FirebaseProvider } from "./firebase/firebaseContext";

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <Routes>
          <Route path="/" element={<LoginSignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/pokemonft/:id" element={<IndividualCardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </FirebaseProvider>
    </div>
  );
}

export default App;
