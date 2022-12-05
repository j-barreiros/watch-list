import { CastMember } from "../../interfaces";

// Style
import StyledCastSlider from './StyledCastSlider'

//Components
import CastListItem from './components/CastListItem'

interface CastSliderProps {
  castMembers: Array<CastMember>
}

const CastSlider = ({ castMembers }: CastSliderProps) => {

  return (
    <StyledCastSlider>
      {castMembers.map(m => <CastListItem id={m.id} name={m.name} character={m.character} profile_path={m.profile_path} />)}
      <div className='cast_remaining'>View More</div>
    </StyledCastSlider>
  )
}

export default CastSlider;
