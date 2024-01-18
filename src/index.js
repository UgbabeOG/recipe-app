import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextProvider from "./context/SearchContext";
import { ErrorBoundary } from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <p className="grid place-items-center">
          Error finding page please reload
        </p>
      }
    >
      <ContextProvider>
        <App />
      </ContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
