import Proptypes from "prop-types";
import {Link} from "react-router-dom";

const Movie = ({ movies }) => {
    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <img src={movie.medium_cover_image}/>
                    <h2>
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </h2>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map(gen => (
                            <li key={gen}>{gen}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
Movie.propTypes = {
    movies: Proptypes.arrayOf(Proptypes.shape({}))
}

export default Movie;