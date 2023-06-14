
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Movies from './pages/Movies'
import Contact from './pages/Contact'
import { loadContext } from "./Context/Context";
import { useState } from 'react'


function App() {
  const [load, setLoad] = useState(false)

  return (
    <>
    <loadContext.Provider value={{ load, setLoad }}>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/supermovie_database/'}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movie/:title" element={<MovieDetails />}/>
        </Routes>
      </BrowserRouter>
    </loadContext.Provider>
    </>
  )
}

export default App
