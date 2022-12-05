import React from 'react'
import { useNavigate } from 'react-router-dom';
import StyledSearchPersonItem from './StyledSearchPersonItem';

type SearchPersonItemProps = {
  person: {
    id: number,
    name: string,
    known_for: Object[],
    known_for_department: string,
    profile_path: string,
  }
}

function SearchPersonItem(props: SearchPersonItemProps) {
  {console.log(props.person)}

  const { id, name, known_for, known_for_department, profile_path } = props.person;
  const navigate = useNavigate()
  return (
    <StyledSearchPersonItem>
      <img
        className='person_photo'
        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
        alt={`${name} photo`}
      />
      <h2 className='person_name'
        onClick={() => navigate(`person/$${id}`)}
      >{name}</h2>
      <p className='person_role'>{known_for_department}</p>
    </StyledSearchPersonItem>
  )
}

export default SearchPersonItem