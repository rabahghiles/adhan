import React from 'react';
import Prayer from '../prayer/prayer';

const prayers = ({prayersTime}) => {
    return (
        <div className="gr-prayers">
            <Prayer arabicName={"الفجر"} latinName={"Fajr"} time={prayersTime.Fajr} />
            <Prayer arabicName={"الشروق"} latinName={"Chorouk"} time={prayersTime.Sunrise} />
            <Prayer arabicName={"الضهر"} latinName={"Dhuhr"} time={prayersTime.Dhuhr} />
            <Prayer arabicName={"العصر"} latinName={"Asr"} time={prayersTime.Asr} />
            <Prayer arabicName={"المغرب"} latinName={"Maghrib"} time={prayersTime.Maghrib} />
            <Prayer arabicName={"العشاء"} latinName={"Isha"} time={prayersTime.Isha} />
        </div>
    )
}
 
export default prayers;