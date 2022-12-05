import React, { useEffect, useState } from 'react'

// Style
import StyledTvSeasonsPopup from './StyledTvSeaonsPopup'

// Type
type TVSeasonsPopupProps = {
    tvId: number;
}

function TvSeasonsPopup(props: TVSeasonsPopupProps) {
    const { tvId } = props;
    const [seasons, setSeasons] = useState<Object[]>([]);

    useEffect(() => {
      
    }, [])
    

    return (
        <StyledTvSeasonsPopup>
            <div className='popup_top'>
                <h3 className='popup_title'>Watch Progress</h3>
                <button className='close_btn'>X</button>
            </div>
        </StyledTvSeasonsPopup>
    )
}

export default TvSeasonsPopup