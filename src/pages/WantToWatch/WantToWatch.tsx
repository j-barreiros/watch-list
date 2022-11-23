import React, { useContext } from 'react'
import { SavedInfoContext } from '../../context/SavedInfoProvider'

function WantToWatch() {
    const {wantToWatch} = useContext(SavedInfoContext);

    return (
        <>
            {wantToWatch.map(wtwItem => <p>{wtwItem.original_title}</p>)}
        </>
    )
}

export default WantToWatch