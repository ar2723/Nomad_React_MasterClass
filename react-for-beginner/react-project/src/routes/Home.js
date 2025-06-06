import {useEffect, useState} from "react";
import Movie from "../components/MovieComp";
import styles from "./Home.module.css";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // 영화 목록 받아오기
    const getMovies = async () => {
        const apiUrl = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year';
        const json = await (await fetch(apiUrl)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {getMovies()}, [])
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    <Movie movies={movies}/>
                </div>
            )}
        </div>
    )
}

export default App;