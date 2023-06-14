import './GenreFilt.css'
import movies from '../../../data/moviedata';
import { useState } from 'react';
const GenreFilt = ({genre, setGenre}) => {
    const [visible, setVisible] = useState(false);
    let movieGenreArray = []

    const moviesGenre = movies.map((movie, i) => movie.genre)
    moviesGenre.forEach((genre) => Array.prototype.push.apply(movieGenreArray, genre))
    const uniqueGenre = movieGenreArray.filter((item, i) => {
        return movieGenreArray.indexOf(item) === i;
    })
    return ( 
        <>
        <div onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} className='dd-wrapper'>
            <div onClick={() => {setVisible(true)}}className='dd-header'> 
                <div className='dd-header-title'>
                    <span>{genre}</span>
                    <div className="arrow"></div>
                </div>
            </div>
            <div className={visible?'dd-list visible':'dd-list'}>
                {uniqueGenre.map((genreItem, i) => <div key={i}onClick={() => {setVisible(false); setGenre(genreItem)}} className='dd-list-item' >{genreItem}</div>)}
            </div>
        </div>
        </>
     );
}
 
export default GenreFilt;