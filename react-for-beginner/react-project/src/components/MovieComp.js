import Proptypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ movies }) => {
    return (
        <div  className={styles.movie}>
            {movies.map(movie => (
                <div key={movie.id}>
                    <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie__img} />
                    <h2 className={styles.movie__title}>
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </h2>
                    <h3 className={styles.movie__year}>{movie.year}</h3>
                    <p>
                        {movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}
                    </p>
                    <ul className={styles.movie__genres}>
                        {movie.genres.map(gen => (<li key={gen}>{gen}</li>))}
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