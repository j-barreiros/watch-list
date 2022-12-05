import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SavedInfoContext } from '../../../../../../context/SavedInfoProvider';

// Style
import StyledMediaSearchItem from './StyledMediaSearchItem'

// Img
import imageNotFound from '../img/no_image.jpg'

type SearchMediaItemProps = {
    media: {
        id: number,
        title?: string,
        name?: string,
        poster_path: string,
        release_date?: string,
        first_air_date?: string,
        overview: string
    }
    category: string
}

function SearchMediaItem(props: SearchMediaItemProps) {

    const { id, title, name, poster_path, release_date, first_air_date, overview } = props.media;
    const { category } = props

    const navigate = useNavigate();

    const userInfo = useContext(SavedInfoContext)

    function getFormatedDate(unformatedDate: string = ''): string {
        let months = ["January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"];
        let [year, month, day] = unformatedDate.split('-');
        return `${months[parseInt(month) - 1]} ${day}, ${year}`;
    }

    function handleActionButton(button : string) : void {
        // Watched Button
        if(button == 'watched') {
            // Toggle
            if(!userInfo.isInWatched(id)) {
                userInfo.addWatched(props.media);
            } else if(userInfo.isInWatched(id)) {
                userInfo.removeFromWatched(id);
            }

            //Removes from WantoToWatch
            if(userInfo.isInWantToWatch(id)) {
                userInfo.removeFromWantToWatch(id);
            }
        }

        // WantoToWatch Button
        if(button == 'wantToWatch') {
            // Toggle
            if(!userInfo.isInWantToWatch(id)) {
                userInfo.addWantToWatch(props.media);
            } else if(userInfo.isInWantToWatch(id)) {
                userInfo.removeFromWantToWatch(id)
            }

            // Removes from Watched
            if(userInfo.isInWatched(id)) {
                userInfo.removeFromWatched(id)
            }
        }
        
    }

    return (
        <StyledMediaSearchItem>
            <img
                className='media_poster clickable'
                alt={`${category == 'movie' ? title : name} poster`}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                onError={e => e.currentTarget.src = imageNotFound}
                onClick={() => navigate(`${category}/${id}`)}
            />

            <div className='media_info'>
                <div>
                    <h2
                        className='media_title clickable'
                        onClick={() => navigate(`${category}/${id}`)}>
                        {category == 'movie' ? title : name}
                    </h2>
                    <p className='media_release'>{getFormatedDate(category == 'movie' ? release_date : first_air_date)}</p>
                </div>

                <p className='media_overview'>{overview}</p>

                <div className='actions'>
                    <button
                        className={`action_btn ${userInfo.isInWatched(id) && 'active'}`}
                        onClick={() => handleActionButton('watched')}>
                        Watched
                    </button>

                    <button
                        className={`action_btn ${userInfo.isInWantToWatch(id) && 'active'}`}
                        onClick={() => handleActionButton('wantToWatch')}>
                        Want to Watch
                    </button>
                </div>
            </div>
        </StyledMediaSearchItem>
    )
}

export default SearchMediaItem;
