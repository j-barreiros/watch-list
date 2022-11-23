import React, { useContext } from 'react'

// Styles
import StyledMovieListItem from './StyledMovieListItem';

// Router
import { useNavigate } from 'react-router-dom';
import { SavedInfoContext } from '../../context/SavedInfoProvider';

interface movieProps {
    id: number,
    original_title: string,
    poster_path: string,
    release_date: string,
    overview: string,
}

export default function MovieListItem({ movie }) {
    const { id, title, poster_path, release_date, overview }: movieProps = movie;
    const navigate = useNavigate();
    const { addWatched, addWantToWatch } = useContext(SavedInfoContext);

    function getFormatedDate(unformatedDate: string): string {
        let months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        let [year, month, day] = unformatedDate.split('-');
        return `${months[parseInt(month) - 1]} ${day}, ${year}`;
    }
    
    return (
        <StyledMovieListItem>
            <img
                className='movie_poster'
                alt='movie poster'
                src={`https://image.tmdb.org/t/p/w500${poster_path}`} />

            <div className='movie_info'>
                <h2 className='movie_title' onClick={() => navigate(`movie/${id}`)}>{title}</h2>
                <p className='movie_releaseDate'>{getFormatedDate(release_date)}</p>
                <p className='movie_overview'>{overview}</p>

                <div className='actions'>
                    <button
                        className='action_btn w_btn'
                        onClick={() => addWatched(movie)}
                    >Watched</button>

                    <button
                        className='action_btn wtw_btn'
                        onClick={() => addWantToWatch(movie)}
                    >Want to watch</button>
                </div>
            </div>

        </StyledMovieListItem>
    )
}
