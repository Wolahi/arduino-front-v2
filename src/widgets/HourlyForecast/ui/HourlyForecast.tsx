import { useEffect, useState } from 'react';
import HourlyForecastColumn from '../../../shared/HourlyForecastColumn';
import useGetTemp from '../../../shared/hooks/useGetTemp';
import style from './HourlyForecast.module.scss';
import LoadingSmall from '../../../shared/LoadingSmall';

interface MyType {
  temp: number;
  hour: number;
}
// eslint-disable-next-line import/prefer-default-export
export const HourlyForecast = () => {
  const { temp } = useGetTemp();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastTemp, setLastTemp] = useState<MyType[]>();
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const hours = currentTime.getHours();
  useEffect(() => {
    if (temp) {
      if (!lastTemp) {
        setLastTemp([{ temp: temp.value, hour: hours }]);
      } else if (lastTemp.length < 5) {
        lastTemp.push({ temp: temp.value, hour: hours });
      } else {
        lastTemp.shift();
        lastTemp.push({ temp: temp.value, hour: hours });
      }
    }
  }, [hours]);

  return (
    <div className={style.HourlyForecast}>
      <div className={style.HourlyForecast__title}>Hourly Forecast:</div>
      <div className={style.HourlyForecast__content}>
        {lastTemp ? (
          lastTemp.map((value, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={key}>
              <HourlyForecastColumn
                isDay={value.hour < 22 && value.hour >= 6}
                time={`${value.hour}:00`}
                temp={value.temp}
              />
            </div>
          ))
        ) : (
          <LoadingSmall />
        )}
      </div>
    </div>
  );
};
