import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx"
import MoviesPage from "./pages/MoviesPage.jsx";
import TopMoviePage from "./pages/TopMoviePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

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