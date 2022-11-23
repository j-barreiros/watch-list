import React, { useContext } from 'react'
import { SavedInfoContext } from '../../context/SavedInfoProvider'

function Watched() {

    const {watched} = useContext(SavedInfoContext);

    return (
        <section>
            {watched.map(movie => <h1>{movie.title}</h1>)}
        </section>
    )
}

export default Watched