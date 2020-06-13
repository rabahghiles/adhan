import React from 'react';
import Date from '../date/date';
import CurrentDate from '../currentprayer/currentprayer';
import Prayers from '../prayers/prayers';

const Sidebar = ({prayersTime, date}) => {
    return (

        <div className="gr-sidebar">
            
            <Date date={date} />
            <CurrentDate prayersTime={prayersTime} />
            <Prayers prayersTime={prayersTime} />

        </div>
    );
}

export default Sidebar;