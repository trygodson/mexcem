import React, { useRef } from 'react';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../../shared/components/button/button';
import {
  ArrowLeft,
  ArrowRight,
  Flag,
  FlagFill,
  Plus,
} from 'react-bootstrap-icons';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import Image from '../../../../../assets/img/clay-banks-31l-8hY1mt4-unsplash.jpg';
import Ratings from '../../../../../shared/components/ratings/ratings';
import Height from '../../../../../shared/components/height/height';

const customHrStyle = {
  background: colorScheme.border2,
};

const customCardStyle = {
  marginBottom: '0px',
};

const iconStyle = {
  marginRight: '9px',
  marginBottom: '-2px',
};

const checkboxStyle = {
  marginLeft: '15px',
};

const imgStyle = {
  width: '45px',
  borderRadius: '50%',
};

function RatingDetails() {
  const modalRef = useRef();

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Review</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          {/* <input
            placeholder="Search"
            className="search"
            style={{ width: '180px' }}
          />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button> */}
          <div className="dflex ">
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace dflec jcc alc px-1"
              onClick={() => {}}
            >
              <Plus size={12.5} />
              view transaction
            </Button>
            <Button
              className="dashboard-title-btn danger-dashboard-title-btn rightSpace dflex jcc alc px-1"
              onClick={() => {}}
            >
              <FlagFill size={12.5} />
              Flag review
            </Button>
          </div>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="dflex jcb">
            <div className="card-padded-title multiple">
              <h3 className="hoverPointer">Fix battery</h3>
            </div>
            <div className="dflex alc jcc px-1">
              <h4 className="success">Total: $100.00</h4>
            </div>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '117px',
              marginLeft: `8px`,
              height: '2.2px',
            }}
          />
          <hr style={customHrStyle} />
        </Card>
        <Card>
          <div className="row">
            <div className="col-lg-6 paddingNone">
              <div className="row">
                <div className="col-6 text-center">
                  <h5 style={{ fontSize: '14px', float: 'left' }}>Customer</h5>

                  <div>
                    <img src={Image} width="100%" />
                  </div>
                  <div className="dflex alc jcc">
                    <div
                      className="dangerBg"
                      style={{
                        borderRadius: '50%',
                        width: '10px',
                        height: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    <span className="danger">Offline</span>
                  </div>
                  <h4>192.3.2.001</h4>
                  <span style={{ fontSize: '14px' }}>IP Address</span>
                </div>
                <div className="col-6 relative">
                  <div
                    className="_absolute "
                    style={{ top: '25%', right: '0' }}
                  >
                    <div>
                      <ArrowRight size={33} />
                    </div>
                    <div>
                      <ArrowLeft size={33} />
                    </div>
                  </div>
                  <Height val={20} />
                  <div>
                    <h4>Stephen Jackson</h4>
                    <span style={{ fontSize: '14px' }}>full name</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <Ratings val={4} size={18} />
                    <span style={{ fontSize: '14px' }}>4/5 rating</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <h4>+1 4145543323</h4>
                    <span style={{ fontSize: '14px' }}>Phone</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <h4>sj@auxcar.co</h4>
                    <span style={{ fontSize: '14px' }}>Email</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <h4>10/05/2020 05:22PM</h4>
                    <span style={{ fontSize: '14px' }}>Date and Time</span>
                  </div>
                  <Height val={10} />
                  <div style={{ marginRight: '-50px' }}>
                    <h4>Review</h4>
                    <div className="outside-border-line mtop-1">
                      <span style={{ fontSize: '12px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed leo augue, congue id gravida vitae, gravida nec
                        lorem. Morbi at placerat purus, at convallis ligula.
                        Praesent neque ipsum, sodales in bibendum eu, gravida et
                        sapien. Cras mollis urna nec dolor pulvinar, sed
                        porttitor tellus iaculis.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 paddingNone">
              <div className="row">
                <div className="col-6 text-center">
                  <h5 style={{ fontSize: '14px', float: 'left' }}>Driver</h5>

                  <div>
                    <img src={Image} width="100%" />
                  </div>
                  <div className="dflex alc jcc">
                    <div
                      className="dangerBg"
                      style={{
                        borderRadius: '50%',
                        width: '10px',
                        height: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    <span className="danger">Offline</span>
                  </div>
                  <h4>192.3.2.001</h4>
                  <span style={{ fontSize: '14px' }}>IP Address</span>
                </div>
                <div className="col-6">
                  <Height val={20} />
                  <div>
                    <h4>Stephen Jackson</h4>
                    <span style={{ fontSize: '14px' }}>full name</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <Ratings val={4} size={18} />
                    <span style={{ fontSize: '14px' }}>4/5 rating</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <h4>+1 4145543323</h4>
                    <span style={{ fontSize: '14px' }}>Phone</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <h4>sj@auxcar.co</h4>
                    <span style={{ fontSize: '14px' }}>Email</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <h4>10/05/2020 05:22PM</h4>
                    <span style={{ fontSize: '14px' }}>Date and Time</span>
                  </div>
                  <Height val={10} />
                  <div>
                    <h4>Review</h4>
                    <div className="outside-border-line mtop-1">
                      <span style={{ fontSize: '12px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed leo augue, congue id gravida vitae, gravida nec
                        lorem. Morbi at placerat purus, at convallis ligula.
                        Praesent neque ipsum, sodales in bibendum eu, gravida et
                        sapien. Cras mollis urna nec dolor pulvinar, sed
                        porttitor tellus iaculis.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default RatingDetails;
