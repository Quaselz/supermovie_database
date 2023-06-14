import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import movies from "../data/moviedata";

const MovieDetails = () => {
    const params = useParams()
    const title = params.title
    const movie = movies.filter((movie) => movie.title === title)
    console.log(movie[0]);
    return ( 
        <>
            <Nav />
            <main>
                <section>
                    <h1>Details about {movie[0].title}</h1>
                    <p>{movie[0].year}</p>
                    <p>{movie[0].director}</p>
                    <p>{movie[0].duration}</p>
                    <p>{movie[0].rate}</p>
                    <ul>
                         {movie[0].genre.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    
                </section>
            </main>
            <Footer />
        </>
    );
}
 
export default MovieDetails;