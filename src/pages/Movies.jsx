import Footer from "../components/Footer/Footer";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import Nav from "../components/Nav/Nav";
import movies from "../data/moviedata";

const Movies = () => {

    console.log(movies);
    return ( 
        <>
            <Nav />
            <main>
                <section>
                    <h1>Movie</h1>
                    {movies.map((movie, i) => <MovieDetail id={i}title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate} key={i} />)}
                </section>
            </main>
            <Footer />
        </>
     );
}
 
export default Movies;