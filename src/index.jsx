import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import Navbar from "./Navbar";

const App = lazy(() => import("./App"));
const Footer = lazy(() => import("./Footer"));

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Suspense>
        <App />
        <Footer />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
