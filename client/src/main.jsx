import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Import the routes
import App from "./App.jsx";
import WelcomePage from "./pages/welcomePage";
import ErrorPage from "./pages/errorPage.jsx";

//Import stylesheet
import "../src/assets/styles/index.css";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: "members",
        element: <WelcomePage />,
      },
      {
        path: "project/:id",
        element: <WelcomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
