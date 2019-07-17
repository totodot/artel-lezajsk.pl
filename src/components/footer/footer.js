import React from 'react';
// import Map from './googleMap';
import PhoneSvg from '../../images/icons/phone.inline.svg';
import EnvelopeSvg from '../../images/icons/envelope.inline.svg';
import { config } from '../../../siteConfig';

const getOpeningTime = ({ open, close }) => {
  const getTime = times => times.map(time => time.toString().padStart(2, 0)).join(':');
  return [open, close].map(getTime).join('-');
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="footer__info-container">
            <div className="footer__company-name">{config.shortName}</div>
            <div className="footer__company-subname">{config.shortDescription}</div>
            <div className="footer__address">
              <div>{config.street}</div>
              <div>
                {config.postCode}
                {' '}
                {config.city}
              </div>
            </div>
            <div className="footer__contact footer-contact">
              <a href={`tel:+48 ${config.phone}`} className="footer-contact__item">
                <span className="footer-contact__icon">
                  <PhoneSvg />
                </span>
                {config.phone}
              </a>
              <a href={`mailto:${config.email}`} className="footer-contact__item">
                <span className="footer-contact__icon">
                  <EnvelopeSvg />
                </span>
                {config.email}
              </a>
            </div>
            <div className="working-hours">
              <div className="working-hours__header">Godziny pracy</div>
              <div className="working-hours__item">
                <div className="working-hours__days">pon.-pt.:</div>
                <div className="working-hours__hours">
                  {getOpeningTime(config.workingHoursMondayFriday)}
                </div>
              </div>
              <div className="working-hours__item">
                <div className="working-hours__days">sob.:</div>
                <div className="working-hours__hours">
                  {getOpeningTime(config.workingHoursSaturday)}
                </div>
              </div>
              <div className="working-hours__item">
                <div className="working-hours__days">niedz.:</div>
                <div className="working-hours__hours">Zamknięte</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-none footer__map-col">
          {/* <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div className="footer__map-container" />}
            mapElement={<div className="footer__map-element" />}
          /> */}
          <div className="footer__map-container">
            <iframe
              className="footer__map-element"
              src={config.googleMapsIframe}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;

// TODO;
// underline current day (working hours)
// add info about holidays
