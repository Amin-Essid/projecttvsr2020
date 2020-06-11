import React from 'react';
import {Link} from 'react-router-dom';
import whiteRightArrow from '../images/icons/whiteRightArrow.png';

function PreviousEpisode({videoTitle, getCurrentVideoInfo, seasonIndex, episodeIndex, lnk}) {

    if(videoTitle === 'nowhere' || lnk === null){
        return null
    } else {
        return (
            <>
                <Link to={lnk} className='prevEpisode'>
                    <div className='streamButton' onClick={() => getCurrentVideoInfo(seasonIndex, episodeIndex)}>
                        <img src={whiteRightArrow} alt="whiteRightArrow"/>
                        <p>{videoTitle}</p>
                    </div>
                </Link>
            </>
        )
    }
}

export default React.memo(PreviousEpisode)