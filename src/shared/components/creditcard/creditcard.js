import React from 'react';
import Height from '../height/height';
import VisaImage from '../../../assets/icons/custom/visa-seeklogo.com.svg';
import './creditcard.scss';

function CreditCard({ ...props }) {
  return (
    <div className="credit-card">
      <div className="card">
        <div className="card__front card__part">
          {/* <img
            className="card__front-square card__square"
            src="https://image.ibb.co/cZeFjx/little_square.png"
          /> */}
          <img className="card__front-logo card__logo" src={VisaImage} />
          <Height val={19.5} />
          <p className="card_numer">{props.number || '**** **** **** 6258'}</p>
          <div className="card__space-75">
            <span className="card__label">Card holder</span>
            <p className="card__info">{props.name || 'John Doe'}</p>
          </div>
          <div className="card__space-25">
            <span className="card__label">Expires</span>
            <p className="card__info">{props.expiry || '10/25'}</p>
          </div>
        </div>

        <div className="card__back card__part">
          <div className="card__black-line"></div>
          <div className="card__back-content">
            <div className="card__secret">
              <p className="card__secret--last">{props.cvc || '420'}</p>
            </div>
            {/* <img
              className="card__back-square card__square"
              src="https://image.ibb.co/cZeFjx/little_square.png"
            />
            <img
              className="card__back-logo card__logo"
              src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
