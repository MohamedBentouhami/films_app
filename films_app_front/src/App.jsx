import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import MoviesPage from "./pages/Movies/index.jsx";
import TopMoviePage from "./pages/TopMovies/index.jsx";
import AboutPage from "./pages/About/index.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesPage />}></Route>
          <Route path="/top-movies" element={<TopMoviePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;