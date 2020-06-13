import React from 'react';

const date = ({date}) => {
    const dateHijri = getHijriDate(date.hijri);
    return(
        <div className="gr-current-day">
            <div className="gr-latin-date">{getGregorianDate(date.gregorian)}</div>
            <div className="gr-arabic-date"></div>
            <div className="gr-arabic-date">
                <div className="gr-year">{dateHijri.year}</div>
                <div className="gr-mounth">{dateHijri.mounth}</div>
                <div className="gr-daye">{dateHijri.day}</div>
            </div>
        </div>
    )
}

const getGregorianDate = (date) => {
    const dateArray = date.split("-");
    let mounth = null;

    switch (dateArray[1]) {
        case '01':
            mounth = "janvier";
            break;
        case '02':
            mounth = "février";
            break;
        case '03':
            mounth = "mars";
            break;
        case '04':
            mounth = "avril";
            break;
        case '05':
            mounth = "mai"
            break;
        case '06':
            mounth = "juin"
            break;
        case '07':
            mounth = "juillet"
            break;
        case '08':
            mounth = "out"
            break;
        case '09':
            mounth = "septembre"
            break;
        case '10':
            mounth = "octobre"
            break;
        case '11':
            mounth = "novembre"
            break;
        case '12':
            mounth = "décembre"
            break;
        default:
            mounth = "nm"
    }

    return dateArray[2]+" "+mounth+" "+dateArray[0];
      
}

const getHijriDate = (date) => {
    const dateArray = date.split("-");
    let mounth = null;

    switch (dateArray[1]) {
        case '01':
            mounth = "مُحَرَّم";
            break;
        case '02':
            mounth = "صَفَر";
            break;
        case '03':
            mounth = "ربيع الأول";
            break;
        case '04':
            mounth = "ربيع الثاني";
            break;
        case '05':
            mounth = "جُمادى الأولى";
            break;
        case '06':
            mounth = "جُمادى الثانية";
            break;
        case '07':
            mounth = "رجب";
            break;
        case '08':
            mounth = "شعبان";
            break;
        case '09':
            mounth = "رمضان";
            break;
        case '10':
            mounth = "شوال";
            break;
        case '11':
            mounth = "ذو القعدة";
            break;
        case '12':
            mounth = "ذو الحجة";
            break;
        default:
            mounth = "nm"
    }

    return {
       year: dateArray[0],
       mounth,
       day: dateArray[2] 
    }
}

export default date;