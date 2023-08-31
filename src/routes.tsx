import { createBrowserRouter } from "react-router-dom";
import Bookmarks from "./pages/bookmark";
import Movies from "./pages/movie";
import TvSeries from "./pages/tv-series";
import Home from "./pages/home";
import Error from "./pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tv-series",
    element: <TvSeries />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
]);
