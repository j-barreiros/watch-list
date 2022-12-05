import React, { useContext } from 'react'
import { SavedInfoContext } from '../../context/SavedInfoProvider'

function WantToWatch() {
    const { wantToWatch } = useContext(SavedInfoContext);

    return (
        <>
            {console.log(wantToWatch)}
            {wantToWatch.map(wtwItem => {
                if(wtwItem.title == undefined) {
                    return <p>{wtwItem.name}</p>
                }
                return <p>{wtwItem.title}</p>
            })}
        </>
    )
}

export default WantToWatch