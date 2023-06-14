import { useState } from "react";
import Footer from "../components/Footer/Footer";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import Nav from "../components/Nav/Nav";
import movies from "../data/moviedata";
import Sort from "../components/Sort/Sort"
const Movies = () => {
    const [sort, setSort] = useState()
    
    return ( 
        <>
            <Nav />
            <main>
                <section>
                    <Sort setSort={setSort}/>
                    <h1>Movie</h1>
                    {movies.sort(sort).map((movie, i) => <MovieDetail id={i}title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate} key={i} />)}
                </section>
            </main>
            <Footer />
        </>
     );
}
 
export default Movies;