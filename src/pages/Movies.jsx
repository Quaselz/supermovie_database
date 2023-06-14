import { useState } from "react";
import Footer from "../components/Footer/Footer";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import Nav from "../components/Nav/Nav";
import movies from "../data/moviedata";
import Search from "../components/Search/Search"
const Movies = () => {
    const [sort, setSort] = useState()
    const [filter, setFilter] = useState()
    const [genre, setGenre] = useState("Genre")

    const filterObj = (el) => {
        return el.title.includes(filter)?el:el.year.includes(filter)?el:el.director.includes(filter)?el:null
    }
    const filterGenre = (el) => {
        return el.genre.includes(genre)?el:null
    }

    return ( 
        <>
            <Nav />
            <main>
                <section>
                    <Search setSort={setSort} setFilter={setFilter} genre={genre} setGenre={setGenre}/>
                    <h1>Movie</h1>
                    {movies.sort(sort).filter(filter?filterObj:() => movies).filter(genre!=="Genre"?filterGenre:() => movies).map((movie, i) => <MovieDetail id={i}title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate}key={i} />)}
                </section>
            </main>
            <Footer />
        </>
     );
}
 
export default Movies;