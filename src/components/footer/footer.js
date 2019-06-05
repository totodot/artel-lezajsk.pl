import React from 'react';
import cx from 'classnames';
import Map from './googleMap';
import PhoneSvg from '../../images/icons/phone.inline.svg';
import EnvelopeSvg from '../../images/icons/envelope.inline.svg';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="footer__info-container">
            <div className="footer__company-name">Artel</div>
            <div className="footer__company-subname">artykuły elektryczne</div>
            <div className="footer__address">
              <div>Żwirki i Wigury 9</div>
              <div>37-300 Leżajsk</div>
            </div>
            <div className="footer__contact footer-contact">
              <a href="tel:+48 17 242 79 45" className="footer-contact__item">
                <span className="footer-contact__icon">
                  <PhoneSvg />
                </span>
                17 242 79 45
              </a>
              <a href="mailto:artel@biuro.pl" className="footer-contact__item">
                <span className="footer-contact__icon">
                  <EnvelopeSvg />
                </span>
                {/* TODO change email */}
                artel@biuro.pl
              </a>
            </div>
            <div className="working-hours">
              <div className="working-hours__header">Godziny pracy</div>
              <div className="working-hours__item">
                <div className="working-hours__days">pon.-pt.:</div>
                <div className="working-hours__hours">08:00-17:00</div>
              </div>
              <div className="working-hours__item">
                <div className="working-hours__days">sob.:</div>
                <div className="working-hours__hours">08:00-13:00</div>
              </div>
              <div className="working-hours__item">
                <div className="working-hours__days">niedz.:</div>
                <div className="working-hours__hours">Zamknięte</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 p-none footer__map-col">
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div className="footer__map-container" />}
            mapElement={<div className="footer__map-element" />}
          />
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;

// TODO;
// underline current day (working hours)
// add info about holidays
