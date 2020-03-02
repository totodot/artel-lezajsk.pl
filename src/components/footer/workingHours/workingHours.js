import React from 'react';
import cx from 'classnames';
import { config } from '../../../../siteConfig';

const getTime = times => times.map(time => time.toString().padStart(2, 0)).join(':');
const getOpeningTime = ({ open, close }) => [open, close].map(getTime).join('-');

const currentDate = new Date();
const tempOpenDate = new Date();
const tempCloseDate = new Date();
const isInTimePeriod = ({ open, close }) => {
  const [openHours, openMinutes] = open;
  const [closeHours, closeMinutes] = close;
  tempOpenDate.setHours(openHours);
  tempOpenDate.setMinutes(openMinutes);
  tempCloseDate.setHours(closeHours);
  tempCloseDate.setMinutes(closeMinutes);
  return currentDate > tempOpenDate && currentDate < tempCloseDate;
};

const currentDay = new Date().getDay();
const openingHours = [
  {
    id: 'pon-pt',
    label: 'pon.-pt.:',
    hours: getOpeningTime(config.workingHoursMondayFriday),
    active: currentDay < 6 && isInTimePeriod(config.workingHoursMondayFriday),
  },
  {
    id: 'sob',
    label: 'sob.:',
    hours: getOpeningTime(config.workingHoursSaturday),
    active: currentDay === 6 && isInTimePeriod(config.workingHoursSaturday),
  },
  {
    id: 'niedz',
    label: 'niedz.:',
    hours: 'Zamknięte',
    active: currentDay === 7,
  },
];

const Footer = React.memo(() => (
  <div className="working-hours">
    <div className="working-hours__header">Godziny pracy</div>
    {openingHours.map(day => (
      <div key={day.id}>
        <div
          className={cx({
            'working-hours__item': true,
            'working-hours__item_active': day.active,
          })}
        >
          <div className="working-hours__days">{day.label}</div>
          <div className="working-hours__hours">{day.hours}</div>
        </div>
      </div>
    ))}
  </div>
));
export default Footer;
