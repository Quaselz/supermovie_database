import './GenreFilt.css'
import movies from '../../../data/moviedata';
const GenreFilt = ({genre, setGenre}) => {
    let movieGenreArray = []
    const moviesGenre = movies.map((movie, i) => movie.genre)
    moviesGenre.forEach((genre) => Array.prototype.push.apply(movieGenreArray, genre))
    const uniqueGenre = movieGenreArray.filter((item, i) => {
        return movieGenreArray.indexOf(item) === i;
    })
    return ( 
        <>
        <div className='dd-wrapper'>
            <div className='dd-header'> 
                <div className='dd-header-title'>{genre}</div>
            </div>
            <div className='dd-list'>
                {uniqueGenre.map((genreItem, i) => <div key={i}onClick={() => {setGenre(genreItem)}} className='dd-list-item' >{genreItem}</div>)}
            </div>
        </div>
        </>
     );
}
 
export default GenreFilt;