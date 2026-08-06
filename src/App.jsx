import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/search" element={<Search />}></Route>

        <Route path="/movies" element={<Movies />}></Route>

        <Route path="/movie/:id" element={<MovieDetails />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
