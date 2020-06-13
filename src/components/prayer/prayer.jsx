import React from 'react';

const prayer = ({arabicName,latinName,time}) => {

    return (
        <div className="gr-prayer">
            <div className="gr-prayer-name-2">
                <span className="gr-latin-name-2">{latinName}</span>
                <span className="gr-arabic-name-2">{arabicName}</span>
            </div>
            <div className="gr-prayer-time-2">
                <span>{time}</span>
            </div>
        </div>
    )
}
 
export default prayer;