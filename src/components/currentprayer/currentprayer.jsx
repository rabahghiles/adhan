import React, { useState, useEffect } from 'react';

export default ({prayersTime}) => {
    
    const [currentPrayer, setCurrentPrayer] = useState(getCurrentPrayer(prayersTime));

    useEffect(() => {
        setTimeout(() => setCurrentPrayer(getCurrentPrayer(prayersTime)), 10000);
    }, [currentPrayer]);

    return (
        <div className="gr-current-prayer">
            <div className="gr-prayer-name">
                <span className="gr-latin-name">{currentPrayer.latinName}</span>
                <span className="gr-arabic-name">{currentPrayer.arabicName}</span>
            </div>
            <div className="gr-prayer-time">
                <span className="gr-prayer-time-left">{currentPrayer.left}</span>
                <span className="gr-prayer-time">{currentPrayer.time}</span>
            </div>
        </div>
    );
}


const getCurrentPrayer = (prayersTime) => {
    const date = new Date();
    const time = date.getHours()*60+parseInt(date.getMinutes());
    
    const fajr = getMinutes(prayersTime.Fajr);
    const dhuhr = getMinutes(prayersTime.Dhuhr);
    const asr = getMinutes(prayersTime.Asr);
    const maghrib = getMinutes(prayersTime.Maghrib);
    const isha = getMinutes(prayersTime.Isha);
    
    if ( time < fajr || time > isha ) return {arabicName:"الفجر", latinName: "Fajr", time: prayersTime.Fajr, left: prayerLeftTime(time,fajr) };
    if ( time < dhuhr ) return {arabicName:"الضهر", latinName: "Dhuhr", time: prayersTime.Dhuhr, left: prayerLeftTime(time,dhuhr) };
    if ( time < asr ) return {arabicName:"العصر", latinName: "Asr", time: prayersTime.Asr, left: prayerLeftTime(time,asr) };
    if ( time < maghrib ) return {arabicName:"المغرب", latinName: "Maghrib", time: prayersTime.Maghrib, left: prayerLeftTime(time,maghrib) };
    if ( time < isha ) return {arabicName:"العشاء", latinName: "Isha", time: prayersTime.Isha, left: prayerLeftTime(time,isha) };

}

const getMinutes = (time) => {
    const arrayTime = time.split(":");
    return arrayTime[0]*60+parseInt(arrayTime[1]);
}

const prayerLeftTime = (currentTime,prayerTime) => {
    const leftTime = prayerTime - currentTime;
    const hours = Math.floor(leftTime/60);
    const minutes = (leftTime%60>10)?leftTime%60:"0"+leftTime%60;

    if ( hours > 0) return "- "+hours+"h"+minutes
    else return "- "+minutes+"min";
}