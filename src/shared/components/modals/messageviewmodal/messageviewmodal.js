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

function MessageViewModal({ ...props }) {
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
                Message
              </CustomText>
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <CustomText type="h5" size={14}>
                      Title
                    </CustomText>
                    <Height val={8} />
                    <p>Earn more with more tools</p>
                  </div>
                  <div className="form-group">
                    <CustomText type="h5" size={14}>
                      Description
                    </CustomText>
                    <Height val={8} />
                    <CustomText type="p" size={12}>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                    </CustomText>

                  </div>
                </div>
              </div>
              <Height val={24.5} />
              <div className="row">
                <div className="col-6">
                  <Button className="btn-block center-container-btn danger-outline-btn">
                    delete
                  </Button>
                </div>
                <div className="col-6">
                  <Button className="btn-block center-container-btn btn-success">hide</Button>
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

export default MessageViewModal;
