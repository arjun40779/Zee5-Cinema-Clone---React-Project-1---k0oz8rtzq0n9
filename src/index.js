import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider, userProvider } from "./context/MovieContext";
import { UserProvider } from "./context/UserContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <MovieProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </MovieProvider>
  </BrowserRouter>,
);
