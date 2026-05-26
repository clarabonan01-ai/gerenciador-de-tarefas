import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaksPage from "./pages/taskPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },  
  {
    path: "/task",
    element: <TaksPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
