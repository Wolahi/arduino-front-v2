import React, { useState, useEffect } from 'react';
import style from './styles.module.scss';

const CurrentDate = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthsArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const month = monthsArr[currentTime.getMonth()];
  const dayOfWeek = daysOfWeek[currentTime.getDay()];
  const day = currentTime.getDate();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  return (
    <div className={style.today__wrap}>
      <div className={style.today__time}>
        {hours}:{minutes < 10 ? `0${minutes}` : minutes}
      </div>
      <div className={style.today__date}>
        {dayOfWeek}, {day} {month}
      </div>
    </div>
  );
};

export default CurrentDate;
