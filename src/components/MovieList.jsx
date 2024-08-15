
import PropTypes from 'prop-types'
import data from '../film.json'
import filterMovie from '../utils/filterMovie'
import Movie from './Movie'
import './movieList.css'

const MovieList = ({input}) => {
    const filteredMovies = filterMovie (data , input);
    return (
    <div className="movieList-container">
    {filteredMovies.length>0 ? (
      <div className='movieList'>
      {filteredMovies.map((movie , index) => (<Movie key={index} movie ={movie} />))}

      </div>
    ):(<p className="no-movie-message"> No Movie Exist</p>)}

    </div>
  )
}

MovieList.propTypes = {
    input: PropTypes.string.isRequired
}

export default MovieList