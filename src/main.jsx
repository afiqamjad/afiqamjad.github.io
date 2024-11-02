import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './routes/App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./routes/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
