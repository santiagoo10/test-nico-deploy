import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
//import { ErrorPage } from "./pages/ErrorPage";
//import { HomePage } from "./pages/Home";

import { BrowserRouter } from "react-router-dom";
//import { IndividualCards } from "./components/individualCards/individualCards";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "home",
//     element: <HomePage />,
//     children: [
//       {
//         path: "pokemonft/1",
//         element: <IndividualCards />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
