import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import MoviesPage from "./pages/Movies/index.jsx";
import TopMoviePage from "./pages/TopMovies/index.jsx";
import AboutPage from "./pages/About/index.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />
        <MovieProvider>
          <Routes>
            <Route path="/" element={<MoviesPage />}></Route>
            <Route path="/top-movies" element={<TopMoviePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </MovieProvider>
      </Router>
    </>
  )
}

export default App;