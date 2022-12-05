import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Router
import { useParams } from 'react-router-dom';
import StyledMoviePage from './StyledMoviePage';
import CastSlider from '../../components/CastSlider/CastSlider';

function MoviePage() {
    const [movieData, setMovieData] = useState(null);
    const { movieId } = useParams();
    const apiKey = '59ad944c003109bc0403fd9098e459a7';

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos,credits`)
            .then(response => setMovieData(response.data))
    }, [])

    function getCrewMembersByRole(jobToFind: string) {
        return movieData.credits.crew.filter(m => m.job == jobToFind)
    }

    if (movieData) {
        return (
            <StyledMoviePage>
                <section className='infoSection container'>
                    <img
                        className='movie_poster'
                        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} />
                    <section className='movie_info'>
                        <h1 className='movie_title'>{movieData.title}</h1>
                        <p>{movieData.release_date}</p>
                        <p>PUT GENRES HERE</p>
                        <h3>Overview:</h3>
                        <p className='movie_overview'>{movieData.overview}</p>
                        <h4>Director: PUT DIRECTOR NAME LINK HERE</h4>
                        <h4>Producer: PUT PRODUCER NAME LINK HERE</h4>
                    </section>
                </section>

                <section className='castSection container'>
                    <h2>Cast:</h2>
                    <div className='cast_display'>
                        <CastSlider castMembers={movieData.credits.cast.slice(0, 10)}/>
                    </div>
                </section>

                <section className='TrailerSection'>

                </section>
            </StyledMoviePage>
        )
    }

    return (
        <h1>Loading</h1>
    )
}

export default MoviePage