import React from 'react';
import Modal from '..';
import CustomText from '../../customtext/customtext';
import { colorScheme, gridBreakpoints } from '../../../../default';
import Height from '../../height/height';
import Button from '../../button/button';
import {
  CurrencyDollar,
  Calendar3,
  Clock,
  ChevronRight,
  Globe,
} from 'react-bootstrap-icons';
import IconInput from '../../iconinput/iconinput';
import { useMediaQuery } from 'react-responsive';
import './historyorder.scss';

const customModalStyle = {
  width: '690px',
};

function HistoryOrderModal({ ...props }) {
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
              <div className="dflex jcb alc">
                <CustomText type="h3" size={15}>
                  #4010 - Tire change
                </CustomText>
                <div>
                  <span className="success">successful</span>
                  <p>12/12/2021 18:43PM</p>
                </div>
              </div>
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <div>
                    <CustomText type="h5" size={14}>
                      Tire Change
                    </CustomText>
                    <CustomText type="p" size={11}>
                      ASSIST
                    </CustomText>
                    <div
                      className="history-order-buttom dflex jcc alc flex-columm"
                      style={{ backgroundColor: '#2DB2FF' }}
                    >
                      <h5>10m 30s</h5>
                      <span>duration</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <CustomText type="h5" size={14}>
                      Payment Method
                    </CustomText>
                    <CustomText type="p" size={11}>
                      PAYPAL
                    </CustomText>
                    <div
                      className="history-order-buttom dflex jcc alc flex-columm"
                      style={{ backgroundColor: '#1AD598' }}
                    >
                      <h5>10m 30s</h5>
                      <span>duration</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <CustomText type="h5" size={14}>
                      AUX-97910563873
                    </CustomText>
                    <CustomText type="p" size={11}>
                      TRANSACTION NO
                    </CustomText>
                    <div
                      className="history-order-buttom dflex jcc alc flex-columm"
                      style={{ backgroundColor: '#F9B959' }}
                    >
                      <h5>10m 30s</h5>
                      <span>duration</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <CustomText
                    type="h5"
                    size={14}
                    style={{ margin: '14px', marginTop: '30px' }}
                  >
                    Assist Summary
                  </CustomText>
                  <div className="grayBg" style={{ padding: '10px 0px' }}>
                    <div
                      className="dflex  jcb w100"
                      style={{ padding: '7px 20px' }}
                    >
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          Meetup
                        </CustomText>
                        <CustomText type="span" size={11}>
                          Requested at 2:55pm
                        </CustomText>
                      </div>
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          Arrived
                        </CustomText>
                        <CustomText type="span" size={11}>
                          2:55PM
                        </CustomText>
                      </div>
                    </div>
                    <div
                      className="dflex  jcb w100"
                      style={{ padding: '7px 20px' }}
                    >
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          Package pickup
                        </CustomText>
                        <CustomText type="span" size={11}>
                          at 2:55PM
                        </CustomText>
                      </div>
                    </div>
                    <div
                      className="dflex  jcb w100"
                      style={{ padding: '7px 20px' }}
                    >
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          Package drop off
                        </CustomText>
                        <CustomText type="span" size={11}>
                          at 2:55PM
                        </CustomText>
                      </div>
                    </div>
                    <div
                      className="dflex  jcb w100"
                      style={{ padding: '7px 20px' }}
                    >
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          Completed
                        </CustomText>
                        <CustomText type="span" size={11}>
                          at 2:55PM
                        </CustomText>
                      </div>
                    </div>
                    <div
                      className="dflex  jcb w100"
                      style={{ padding: '7px 20px' }}
                    >
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          Fix up
                        </CustomText>
                        <CustomText type="span" size={11}>
                          at 2:55PM
                        </CustomText>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <CustomText
                    type="h5"
                    size={14}
                    style={{ margin: '14px', marginTop: '30px' }}
                  >
                    Earnings Breakdown
                  </CustomText>
                  <div className="grayBg" style={{ padding: '10px 20px' }}>
                    <div
                      className="dflex  jcb w100"
                      style={{
                        padding: '7px 0px',
                        borderBottom: '1px solid grey',
                      }}
                    >
                      <div className="">
                        <CustomText type="span" size={11}>
                          Base rate
                        </CustomText>
                      </div>
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          $20.00
                        </CustomText>
                      </div>
                    </div>

                    <div
                      className="dflex jcb w100"
                      style={{ padding: '7px 0px' }}
                    >
                      <div className="dflex flex-columm jcb als">
                        <CustomText type="span" size={11}>
                          Time
                        </CustomText>
                        <CustomText type="span" size={11}>
                          (10min 30sec x $0.208/min)
                        </CustomText>
                      </div>
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          $5.00
                        </CustomText>
                      </div>
                    </div>
                    <div
                      className="dflex jcb w100"
                      style={{ padding: '7px 0px' }}
                    >
                      <div className="dflex flex-columm jcb als">
                        <CustomText type="span" size={11}>
                          Distance
                        </CustomText>
                        <CustomText type="span" size={11}>
                          (3.26ml x $0.68/ml)
                        </CustomText>
                      </div>
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          $5.00
                        </CustomText>
                      </div>
                    </div>
                    <div
                      className="dflex  jcb w100"
                      style={{
                        padding: '7px 0px',
                        borderBottom: '1px solid grey',
                      }}
                    >
                      <div className="">
                        <CustomText type="span" size={11}>
                          Tips
                        </CustomText>
                      </div>
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          $5.00
                        </CustomText>
                      </div>
                    </div>

                    <div
                      className="dflex jcb w100"
                      style={{ padding: '7px 0px' }}
                    >
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          Total
                        </CustomText>
                      </div>
                      <div className="">
                        <CustomText
                          type="h5"
                          size={14}
                          style={{ fontWeight: 'bold' }}
                        >
                          $20.00
                        </CustomText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Height val={24.5} />
              <div className="row">
                <div className="w100 dflex jcb alc" style={{ padding: '20px' }}>
                  <div className="dflex jcb alc">
                    <div
                      className="dflex jcb alc primaryBg"
                      style={{
                        marginRight: '10px',
                        padding: '5px',
                        borderRadius: '50%',
                        height: '25px',
                        width: '25px',
                      }}
                    >
                      <Clock className="primary" size={15} />
                    </div>
                    <CustomText type="span" size={13}>
                      See Payment history
                    </CustomText>
                  </div>
                  <ChevronRight size={15} />
                </div>
                <div className="w100 dflex jcb alc" style={{ padding: '20px' }}>
                  <div className="dflex jcb alc">
                    <div
                      className="dflex jcb alc primaryBg"
                      style={{
                        marginRight: '10px',
                        padding: '5px',
                        borderRadius: '50%',
                        height: '25px',
                        width: '25px',
                      }}
                    >
                      <Globe className="primary" size={15} />
                    </div>
                    <CustomText type="span" size={13}>
                      Need help
                    </CustomText>
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

export default HistoryOrderModal;
