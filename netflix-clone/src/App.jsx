import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterContent from "./components/FooterContent";
import Home from "./components/home";
import NavbarHeader from "./components/NavbarHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tv_shows from "./components/Tv_shows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavbarHeader />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className=" mt-2 mb-5 p-3">
                <Home
                  title1="The Lord Of The Rings"
                  title2="Superman"
                  title3="Disney"
                />
              </div>
            </main>
          }
        />
        <Route
          path="/tvshows"
          element={
            <main>
              <div className=" mt-5 mb-5 p-3">
                <Tv_shows />
              </div>
            </main>
          }
        />
        <Route
          path="/moviedetails/:idMovies"
          element={
            <main>
              <div className=" mt-2 mb-5 p-3">
                <MovieDetails />
              </div>
            </main>
          }
        />
      </Routes>

      <footer className="d-flex flex-column align-content-center p-5 mt-5 text-secondary w-75 m-auto">
        <FooterContent />
      </footer>
    </BrowserRouter>
  );
}

export default App;
