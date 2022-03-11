import React from 'react';
import Modal from '..';
import CustomText from '../../customtext/customtext';
import { colorScheme, gridBreakpoints } from '../../../../default';
import Height from '../../height/height';
import Button from '../../button/button';
import { CurrencyDollar, Calendar3, CheckCircle } from 'react-bootstrap-icons';
import IconInput from '../../iconinput/iconinput';
import bagImage from '../../../../assets/img/clay-banks-31l-8hY1mt4-unsplash.jpg';
import { useMediaQuery } from 'react-responsive';

const customModalStyle = {
  width: '690px',
};

const flexPopupPriceStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 0px',
};

function CustomerPromoModal({ ...props }) {
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${gridBreakpoints.lg})`,
  });
  document.body.style = `background: ${colorScheme.modalBodyBackground};`;

  return (
    <div className="bootstrap-wrapper">
      <div className="row">
        <div className="col-12">
          <Modal
            customModalStyle={isLargeScreen && customModalStyle}
            customModalBodyClass="customModalBodyClass"
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                10% Promo for tire change
              </CustomText>
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div
                  className="col-lg-6"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={bagImage} width="140" />
                </div>
                <div className="col-lg-6">
                  <div className="" style={flexPopupPriceStyle}>
                    <CustomText type="h4" size={14}>
                      Max Promo
                    </CustomText>
                    <span>$10</span>
                  </div>
                  <div className="" style={flexPopupPriceStyle}>
                    <CustomText type="h4" size={14}>
                      Expiry Date
                    </CustomText>
                    <span>12/7/2021</span>
                  </div>
                  <div className="" style={flexPopupPriceStyle}>
                    <CustomText type="h4" size={14}>
                      Service Left
                    </CustomText>
                    <span>5/5</span>
                  </div>
                  <div className="" style={flexPopupPriceStyle}>
                    <CustomText type="h4" size={14}>
                      Payment Method
                    </CustomText>
                    <span>paypal and stripe</span>
                  </div>
                  <div className="" style={flexPopupPriceStyle}>
                    <CustomText type="h4" size={14}>
                      Region
                    </CustomText>
                    <span>Arizona</span>
                  </div>
                  <div className="" style={flexPopupPriceStyle}>
                    <CustomText type="h4" size={14}>
                      Applied
                    </CustomText>
                    <span>
                      <CheckCircle size={12} />
                    </span>
                  </div>
                </div>
              </div>
              <Height val={24.5} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CustomerPromoModal;
