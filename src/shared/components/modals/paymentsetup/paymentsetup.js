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
import paypal from '../../../../assets/icons/custom/paypal.svg';
const customModalStyle = {
  width: '690px',
};

const flexPopupPriceStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 0px',
};

function PaymentSetup({ ...props }) {
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
            <div className="modal-header dflex jcb alc">
              <CustomText type="h3" size={15}>
                Paypal
              </CustomText>
              <div>
                <img src={paypal} width="140px" />
              </div>
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-12 dflex flex-columm alc jcc">
                  <p
                    type="p"
                    size={14}
                    className="success_span_text w100 text-center"
                    style={{
                      textAlign: 'center',
                      padding: '15px 20px',
                      fontSize: 14,
                    }}
                  >
                    You can top-up your wallet balance and make transactions
                    with paypal
                  </p>
                  <div className="w100 mtop-2">
                    <Button className="modal-btn action-btn btn-primary w100">
                      Add Funds
                    </Button>
                  </div>

                  <p
                    className="w100"
                    style={{
                      margin: '20px 0',
                      textAlign: 'left',
                      fontSize: '14px',
                    }}
                  >
                    By using this payment option, your data will be shared with
                    the payment provider. More details in our terms and
                    conditions
                  </p>
                  <div className="w100 dflex jce">
                    <Button className="modal-btn action-btn btn-danger">
                      Deactivate
                    </Button>
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

export default PaymentSetup;
