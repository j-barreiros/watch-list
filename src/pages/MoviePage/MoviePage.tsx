import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Router
import { useParams } from 'react-router-dom';

function MoviePage() {
    const [movieData, setMovieData] = useState(null);
    const { movieId } = useParams();
    const apiKey = '59ad944c003109bc0403fd9098e459a7';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
            .then(response => setMovieData(response.data))
    }, [])

    if(movieData) {
        return (
            <div>{movieData.original_title}</div>
        )
    }

    return (
        <h1>Loading</h1>
    )
}

export default MoviePage