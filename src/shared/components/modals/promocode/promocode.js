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

function PromoCodeModal({ ...props }) {
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
                Promo Code
              </CustomText>
            </div>
            <Height val={10} />
            <Height val={10} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <Height val={8} />
                    <Input
                      type="text"
                      placeholder="Enter your your promocode"
                      style={{
                        width: '100%',
                        paddingLeft: '20px',
                        borderColor: 'grey',
                      }}
                    />
                    <Height val={8} />
                    <CustomText type="p" size={14}>
                      Enter the code and it will apply to the next service
                    </CustomText>
                  </div>
                </div>
              </div>
              <Height val={25} />
              <div className="row">
                <div className="col-12">
                  <Button className="btn-block center-container-btn btn-success">
                    Apply
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

export default PromoCodeModal;
