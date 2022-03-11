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

function InviteFriendModal({ ...props }) {
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
                Invite a friend
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
                <div className="col-lg-6 dflex flex-columm alc jcc">
                  <CustomText type="h4" size={14}>
                    Spread the word
                  </CustomText>
                  <p
                    className="w100"
                    style={{
                      margin: '20px 0',
                      textAlign: 'center',
                      fontSize: '12px',
                    }}
                  >
                    auxcar make sure sure that none of your friend will have car
                    troubles with no one to assist them
                  </p>
                  <div
                    className="outside-border-line w100 text-center dflex jcc"
                    style={{
                      padding: '10px 15px',
                      margin: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <CustomText type="h4" size={14}>
                      auxcar.co/stephen/1090
                    </CustomText>
                  </div>
                  <div className="w100">
                    <Button className="modal-btn action-btn btn-primary w100">
                      <i className="fi fi-rr-copy"></i> Click to copy
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

export default InviteFriendModal;
