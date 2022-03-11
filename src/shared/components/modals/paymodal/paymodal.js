import React from 'react';
import Modal from '..';
import CustomText from '../../customtext/customtext';
import { colorScheme, gridBreakpoints } from '../../../../default';
import Height from '../../height/height';
import Button from '../../button/button';
import { CurrencyDollar, Calendar3 } from 'react-bootstrap-icons';
import IconInput from '../../iconinput/iconinput';
import { useMediaQuery } from 'react-responsive';

const customModalStyle = {
  width: '690px',
};

function PayModal({ ...props }) {
  const isLargeScreen = useMediaQuery({ query: `(min-width: ${gridBreakpoints.lg})` });
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
                Pay
              </CustomText>
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <CustomText type="h4" size={14}>
                      Amount
                    </CustomText>
                    <Height val={8} />
                    <IconInput
                      colored={true}
                      type="email"
                      placeholder="Enter amount"
                      icon={CurrencyDollar}
                      iconSize={15.8}
                      customIconDivClass="popupIconDiv"
                      customInputClass="popupInput"
                      customIconClass="popupInputIcon"
                      customInputBorderClass="popupModalInputBorder"
                    />
                  </div>
                  <div className="form-group">
                    <CustomText type="h4" size={14}>
                      Payout date
                    </CustomText>
                    <Height val={8} />
                    <IconInput
                      colored={true}
                      type="date"
                      placeholder="Pick date"
                      icon={Calendar3}
                      iconSize={15.8}
                      customIconDivClass="popupIconDiv"
                      customInputClass="popupInput"
                      customIconClass="popupInputIcon"
                      customInputBorderClass="popupModalInputBorder"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <CustomText type="h4" size={14}>
                      Payment type
                    </CustomText>
                    <Height val={8} />
                    <select name="payment_type">
                      <option value="" disabled selected>
                        Select payment type
                      </option>
                      <option>Paypal</option>
                      <option>Cashapp</option>
                    </select>
                  </div>
                </div>
              </div>
              <Height val={24.5} />
              <div className="row">
                <div className="col-6">
                  <Button className="btn-block center-container-btn danger-outline-btn">
                    Cancel
                  </Button>
                </div>
                <div className="col-6">
                  <Button className="btn-block center-container-btn btn-success">Submit</Button>
                </div>
              </div>
              <Height val={15} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default PayModal;
