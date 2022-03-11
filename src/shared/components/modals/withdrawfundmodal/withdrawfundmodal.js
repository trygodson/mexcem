import React from 'react';
import Modal from '..';
import CustomText from '../../customtext/customtext';
import { colorScheme, gridBreakpoints } from '../../../../default';
import Height from '../../height/height';
import Button from '../../button/button';
import { CurrencyDollar, Calendar3, Wallet } from 'react-bootstrap-icons';
import IconInput from '../../iconinput/iconinput';
import { useMediaQuery } from 'react-responsive';
import Input from '../../input/input';

const customModalStyle = {
  width: '690px',
};

function WithdrawFundModal({ ...props }) {
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
                Withdraw funds
              </CustomText>
            </div>
            <Height val={10} />
            <div
              className="dflex jcc flex-columm alc"
              style={{ padding: '15px 28px', width: '80%', margin: '0 auto' }}
            >
              <span
                className="text-center"
                style={{
                  fontSize: '34px',
                  color: '#2DB2FF',
                  fontWeight: '900',
                }}
              >
                $10.00
              </span>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  marginTop: '15px',
                }}
              >
                Available Balance
              </span>
            </div>
            <Height val={3} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <CustomText type="h4" size={14}>
                      Amount
                    </CustomText>
                    <Height val={8} />
                    <Input
                      type="text"
                      placeholder="Enter your amount"
                      style={{
                        width: '100%',
                        paddingLeft: '20px',
                        borderColor: 'grey',
                      }}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <CustomText type="h4" size={14}>
                      Payment Method
                    </CustomText>
                    <Height val={8} />
                    <select name="payment_type">
                      <option value="" disabled selected>
                        Select preferred payment
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
                  <Button className="btn-block center-container-btn btn-danger ">
                    Cancel
                  </Button>
                </div>
                <div className="col-6">
                  <Button className="btn-block center-container-btn success-outline-btn">
                    Confirm
                  </Button>
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

export default WithdrawFundModal;
