import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MovieProvider } from "./context/movies-context";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;
