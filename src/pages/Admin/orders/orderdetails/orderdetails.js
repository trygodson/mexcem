import React, { useEffect, useState } from 'react';
import Card from '../../../../shared/components/card/card';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../default';
import './orderdetails.scss';
import ProfileImage from '../../../../shared/components/profileimage/profileimage';
import Height from '../../../../shared/components/height/height';
import CustomText from '../../../../shared/components/customtext/customtext';
import { Star, StarFill, ChatTextFill } from 'react-bootstrap-icons';
import Attachment from '../../../../shared/components/smallcards/attachment/attachment';
import UserDetails from '../../../../shared/components/userdetails/userdetails';

const customHrStyle = {
  background: colorScheme.border2,
};

const customColStyle = {
  borderLeft: `1px solid ${colorScheme.darkGray2}`,
  // marginTop: '-24px',
  padding: '25px',
};

const customCol2Style = {
  paddingLeft: '17px',
  paddingTop: '35px',
  paddingRight: '17px',
  paddingBottom: '10px',
};

const customIconStyle = {
  marginBottom: '-2px',
  marginRight: '1.3px',
};

const customGroupStlyle = {
  color: colorScheme.success,
};

// const customCardContentStyle = {
//   paddingLeft: '7px',
//   paddingTop: '20px',
//   paddingRight: '7px',
//   paddingBottom: '20px',
// };

const customBorderStyle = {};

function OrderDetails() {
  const [tab, setTab] = useState('assist_details'); // mapping

  const defaultHrMarginLeft = 11;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  useEffect(() => {
    if (tab == 'assist_details') {
      setHrMarginLeft(defaultHrMarginLeft);
    } else {
      setHrMarginLeft(179);
    }
  }, [tab]);

  return (
    <main>
      <PageTitle
        title={
          <span>
            Order <b>/ #4010 - Stephen Jackson</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTab('assist_details')}>
              Assist details
            </h3>
            <h3 className="hoverPointer" onClick={() => setTab('mapping')}>
              Mapping
            </h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '120px',
              marginLeft: `${hrMarginLeft}px`,
            }}
          />
          <hr style={customHrStyle} />
          <div className={tab != 'assist_details' && 'hide'}>
            <div className="row">
              <div className="col-sm-12 col-lg-7" style={customCol2Style}>
                <h3 style={{ marginLeft: '13.6px' }}>Customer details</h3>
                <Height val={11} />
                {/* pass props to below */}
                <UserDetails />

                <Height val={79} />
                <h3 style={{ marginLeft: '13.6px' }}>Driver details</h3>
                <Height val={11} />
                <UserDetails />
              </div>
              <div className="col-sm-12 col-lg-5" style={customColStyle}>
                <h3>Cost breakdown</h3>
                <Height val={8} />
                <div className="row">
                  <div className="col-12 paddingNone">
                    <p>
                      <span className="left boldText">$100.00</span>{' '}
                      <span className="right boldText">4.00</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 paddingNone">
                    <p>
                      <span className="left">
                        <small>Total Charge</small>
                      </span>{' '}
                      <span className="right">
                        <small>Total duration</small>
                      </span>
                    </p>
                  </div>
                </div>
                <Height val={15} />
                <hr style={{ background: colorScheme.darkGray2 }} />
                <Height val={15} />

                <div className="row">
                  <div className="col-12 paddingNone">
                    <p>
                      <span className="left boldText">$20.00</span>{' '}
                      <span className="right boldText">4.00</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 paddingNone">
                    <p>
                      <span className="left">
                        <small>Battery Change</small>
                      </span>{' '}
                      <span className="right">
                        <small>Duration</small>
                      </span>
                    </p>
                  </div>
                </div>

                <Height val={27} />

                <div className="row">
                  <div className="col-12 paddingNone">
                    <p>
                      <span className="left boldText">$20.00</span>{' '}
                      <span className="right boldText">2.00</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 paddingNone">
                    <p>
                      <span className="left">
                        <small>Extra time</small>
                      </span>{' '}
                      <span className="right">
                        <small>Duration</small>
                      </span>
                    </p>
                  </div>
                </div>

                <Height val={30} />

                <div className="row">
                  <div className="col-12 paddingNone">
                    <h3 className="boldNone">Order details</h3>
                    <Height val={5} />
                    <h5>Everlast Battery</h5>
                    <Height val={4} />
                    <CustomText type="p" size={14}>
                      A brand-new, unused, unopened, undamaged item in its original packaging (where
                      packaging is applicable). Packaging should be the same as what is found in a
                      retail store, unless the item is handmade or was packaged by the manufacturer
                      in non-retail packaging, such as an unprinted box or plastic bag. See the
                      seller's listing for full details.
                    </CustomText>
                    <Height val={11} />
                    <h5>Customer's attachment</h5>
                    <Height val={12} />
                    {/* pass props to below */}
                    <Attachment />
                    <Height val={11} />
                    <h5>Driver's attachment</h5>
                    <Height val={12} />
                    <Attachment />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={tab != 'mapping' && 'hide'}>
            <div className="row mapping">
              <div className="col-sm-12 col-lg-7 _padding">
                <div className="map"></div>
              </div>
              <div className="col-sm-12 col-lg-5">
                <div className="details">
                  <p>
                    <b>Assist start time:</b>
                    <span className="right">6th, Dec 2019 03:58:06 PM</span>
                  </p>
                  <p>
                    <b>Assist end time:</b>
                    <span className="right">6th, Dec 2019 03:58:06 PM</span>
                  </p>
                  <p>
                    <b>Pickup address:</b>
                    <span className="right">Arizona</span>
                  </p>
                  <p>
                    <b>Drop address:</b>
                    <span className="right">Arizona</span>
                  </p>
                  <p>
                    <b>Total distance:</b>
                    <span className="right">4KM</span>
                  </p>
                  <p>
                    <b>Base price:</b>
                    <span className="right">$4.00</span>
                  </p>
                  <p>
                    <b>Tax price:</b>
                    <span className="right">$5.00</span>
                  </p>
                  <p>
                    <b>Total amount:</b>
                    <span className="right">$5.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <Height val={70} /> */}
        </Card>
      </section>
    </main>
  );
}

export default OrderDetails;
