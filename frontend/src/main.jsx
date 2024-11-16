import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewsProvider } from "./context/NewsProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./features/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NewsProvider>
          <App />
        </NewsProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
