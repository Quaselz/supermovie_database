import './MovieDetail.css'
import { Link } from 'react-router-dom'

const MovieDetail = ({id, title, year, director, duration, genre, rate}) => {
    const link = "/movie/" + title
    return ( 
        <article>
            <Link to={link} >
                <h3>{title}</h3>
                <p>{year}</p>
                <p>{director}</p>
                <p>{duration}</p>
                <p>{rate}</p>
                <ul>
                    {genre.map((item,i) => <li key={i}>{item}</li>)}
                </ul>
            </Link>
        </article>
     );
}
 
export default MovieDetail;