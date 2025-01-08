import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import Navbar from "./Navbar";
import App from "./App";
const Footer = lazy(() => import("./Footer"));

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <Suspense
          fallback={
            <img
              src="/images/chameleon-studios-logo-small.png"
              alt="Chameleon Studios logo"
              style={{ display: "block", margin: "0 auto", width: "60px" }}
            />
          }
        >
          <Footer />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
