// main.jsx - Entry point for React app, sets up routing
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

// Mount the app to the DOM and enable routing
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
