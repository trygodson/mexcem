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

function TransactionModal({ ...props }) {
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
              <CustomText type="h3" size={18}>
                Transaction Details
              </CustomText>
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="">
                <div
                  className="dflex jcb alc"
                  style={{ padding: '10px 20px', margin: '7px 0px' }}
                >
                  <CustomText type="h4" size={16}>
                    Transaction No
                  </CustomText>
                  <CustomText type="p" size={16}>
                    Aux988687t6
                  </CustomText>
                </div>
                <div
                  className="dflex jcb alc"
                  style={{ padding: '10px 20px', margin: '7px 0px' }}
                >
                  <CustomText type="h4" size={16}>
                    Date
                  </CustomText>
                  <CustomText type="p" size={16}>
                    01 Aug 2021
                  </CustomText>
                </div>
                <div
                  className="dflex jcb alc"
                  style={{ padding: '10px 20px', margin: '7px 0px' }}
                >
                  <CustomText type="h4" size={16}>
                    Time
                  </CustomText>
                  <CustomText type="p" size={16}>
                    12:00PM
                  </CustomText>
                </div>
                <div
                  className="dflex jcb alc"
                  style={{ padding: '10px 20px', margin: '7px 0px' }}
                >
                  <CustomText type="h4" size={16}>
                    Type
                  </CustomText>
                  <CustomText type="p" size={16}>
                    Deposit
                  </CustomText>
                </div>
                <div
                  className="dflex jcb alc"
                  style={{ padding: '10px 20px', margin: '7px 0px' }}
                >
                  <CustomText type="h4" size={16}>
                    Payment method
                  </CustomText>
                  <CustomText type="p" size={16}>
                    Paypal
                  </CustomText>
                </div>
                <div
                  className="dflex jcb alc"
                  style={{ padding: '10px 20px', margin: '7px 0px' }}
                >
                  <CustomText type="h4" size={16}>
                    Amount
                  </CustomText>
                  <CustomText type="p" size={16}>
                    $10
                  </CustomText>
                </div>
                <div
                  className="dflex jcb alc"
                  style={{ padding: '10px 20px', margin: '7px 0px' }}
                >
                  <CustomText type="h4" size={16}>
                    Status
                  </CustomText>
                  <CustomText type="p" size={16}>
                    Completed
                  </CustomText>
                </div>
              </div>
              <div className="w100">
                <Button className="modal-btn action-btn btn-primary w100">
                  Need Help ?
                </Button>
              </div>
              <Height val={24.5} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default TransactionModal;
