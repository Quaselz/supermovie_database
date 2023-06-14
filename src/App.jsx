
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movie/:title" element={<MovieDetails />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
