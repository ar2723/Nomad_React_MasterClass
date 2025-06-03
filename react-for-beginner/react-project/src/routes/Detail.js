import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Detail = () => {
    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const apiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
        const json = await (await fetch(apiUrl)).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {getMovie();}, []);

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Detail</h1>
            {loading ? <strong>Loading...</strong> :
                <div>
                    <img src={movie.medium_cover_image}/>
                    <h2>{movie.title}</h2>
                    <p>year : {movie.year}</p>
                    <ul>
                        {movie.genres.map(gen => (
                            <li key={gen}>{gen}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Detail;