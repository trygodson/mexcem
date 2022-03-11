import React from 'react';
import Modal from '..';
import CustomText from '../../customtext/customtext';
import { colorScheme, gridBreakpoints } from '../../../../default';
import Height from '../../height/height';
import Button from '../../button/button';
import { CurrencyDollar, Calendar3, Clock, ChevronRight, Globe } from 'react-bootstrap-icons';
import IconInput from '../../iconinput/iconinput';
import { useMediaQuery } from 'react-responsive';

const customModalStyle = {
  width: '690px',
};

function HistoryModal({ ...props }) {
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
              <div className='dflex jcb alc'>

                <CustomText type="h3" size={15}>
                  #4010 - Tire change
                </CustomText>
                <div>
                  <span className='success'>successful</span>
                  <p>12/12/2021 18:43PM</p>
                </div>
              </div>
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <div>
                    <CustomText type="h5" size={14}>Tire Change</CustomText>
                    <CustomText type="p" size={11}>ASSIST</CustomText>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <CustomText type="h5" size={14}>Payment Method</CustomText>
                    <CustomText type="p" size={11}>PAYPAL</CustomText>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <CustomText type="h5" size={14}>AUX-97910563873</CustomText>
                    <CustomText type="p" size={11}>TRANSACTION NO</CustomText>
                  </div>
                </div>
              </div>
              <div>
                <CustomText type="h5" size={14} style={{ margin: '14px', marginTop: '30px' }}>Earnings Breakdown</CustomText>
                <div >
                  <div className='dflex grayBg jcb w100' style={{ padding: '20px' }}>
                    <div className='' >
                      <CustomText type="h5" size={14} style={{ fontWeight: 'bold' }}>$20.00</CustomText>
                      <CustomText type="span" size={11}>Total Change</CustomText>
                    </div>
                    <div className='' >
                      <CustomText type="h5" size={14} style={{ fontWeight: 'bold' }}>4:00</CustomText>
                      <CustomText type="span" size={11}>Total Duration</CustomText>
                    </div>
                  </div>
                  <div className='dflex grayBg jcb w100' style={{ padding: '20px' }}>
                    <div className='' >
                      <CustomText type="h5" size={14} style={{ fontWeight: 'bold' }}>$20.00</CustomText>
                      <CustomText type="span" size={11}>Total Change</CustomText>
                    </div>
                    <div className='' >
                      <CustomText type="h5" size={14} style={{ fontWeight: 'bold' }}>4:00</CustomText>
                      <CustomText type="span" size={11}>Total Duration</CustomText>
                    </div>
                  </div>
                  <div className='dflex grayBg jcb w100' style={{ padding: '20px' }}>
                    <div className='' >
                      <CustomText type="h5" size={14} style={{ fontWeight: 'bold' }}>$20.00</CustomText>
                      <CustomText type="span" size={11}>Total Change</CustomText>
                    </div>
                    <div className='' >
                      <CustomText type="h5" size={14} style={{ fontWeight: 'bold' }}>4:00</CustomText>
                      <CustomText type="span" size={11}>Total Duration</CustomText>
                    </div>
                  </div>
                </div>
              </div>
              <Height val={24.5} />
              <div className="row">
                <div className='w100 dflex jcb alc' style={{ padding: '20px' }}>
                  <div className='dflex jcb alc'>
                    <div className='dflex jcb alc primaryBg' style={{ marginRight: '10px', padding: "5px", borderRadius: '50%', height: '25px', width: '25px' }}>

                      <Clock className='primary' size={15} />
                    </div>
                    <CustomText type="span" size={13}>See Payment history</CustomText>
                  </div>
                  <ChevronRight size={15} />
                </div>
                <div className='w100 dflex jcb alc' style={{ padding: '20px' }}>
                  <div className='dflex jcb alc'>
                    <div className='dflex jcb alc primaryBg' style={{ marginRight: '10px', padding: "5px", borderRadius: '50%', height: '25px', width: '25px' }}>

                      <Globe className='primary' size={15} />
                    </div>
                    <CustomText type="span" size={13}>Need help</CustomText>
                  </div>
                  <ChevronRight size={15} />
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

export default HistoryModal;
