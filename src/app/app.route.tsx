// app.route.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainApp from "./main-app";
import HomePage from "./home-page";
import FilmDetail from "./FilmDetail"; // Import the FilmDetail component

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: ":filmId",
        element: <FilmDetail />, // Route to FilmDetail component when filmId is in the URL
      },
    ],
  },
]);

export function AppRoute() {
  return <RouterProvider router={router} />;
}
