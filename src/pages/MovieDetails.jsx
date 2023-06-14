import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import movies from "../data/moviedata";
import { useContext } from "react";
import { loadContext } from "../Context/Context";
import Loading from "../components/Loading/Loading";

const MovieDetails = () => {
    const {load, setLoad } = useContext(loadContext)

    const params = useParams()
    const title = params.title
    const movie = movies.filter((movie) => movie.title === title)
    return ( 
        load?
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
        </>:<><Loading /></>
    );
}
 
export default MovieDetails;