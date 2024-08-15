import PropTypes from 'prop-types'
import { useState } from 'react';
import { FaHeart} from 'react-icons/fa'
import './movie.css'

const Movie = ({movie}) => {
    const [liked , setLiked] = useState(false);
    const pressLike =()=>{
        setLiked((prev) => !prev)
    }
    return (
        <div className={`movie-container ${ liked ? 'yes':'no'}` }>
            <div>
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className='movieInfo'>
                <h2>{movie.Title}</h2>
                <p> Released Date: {movie.Released}</p>

            </div>
            <div className='liked-btn'>
            <button className='btn-heart' onClick={pressLike}>
            <FaHeart  color={liked? 'red' :' black'} />
            </button>

            </div>
        </div>
    );
}

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Released: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
    })
};

export default Movie