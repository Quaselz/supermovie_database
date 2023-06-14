import './MovieDetail.css'
import { Link } from 'react-router-dom'

const MovieDetail = ({id, title, year, director, duration, genre, rate}) => {
    const link = "/movie/" + title
    return ( 
        <article className='movieArticle'>
            <Link to={link} >
                <h3>{title}</h3>
                <div>
                <p>Jahr:</p><p>{year}</p>
                <p>Direktor:</p><p>{director}</p>
                <p>Filmdauer:</p><p>{duration}</p>
                <p>Rating:</p><p>{rate}</p>
                </div>
                <h5>Genre</h5>
                <ul>
                    {genre.map((item,i) => <li key={i}>{item}</li>)}
                </ul>
            </Link>
        </article>
     );
}
 
export default MovieDetail;