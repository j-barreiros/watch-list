import { CastMember } from "../../../interfaces"

//Style
import StyledCastListItem from "./StyledCastListItem";

function CastListItem({ id, name, character, profile_path }: CastMember) {
    return (
        <StyledCastListItem>
            <div
                className='cast_photo clickable'
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                />
            </div>
            <div className="cast_info">
                <p className='cast_name clickable'>{name}</p>
                <p className='cast_character'>{character}</p>
            </div>
        </StyledCastListItem>
    )
}

export default CastListItem;