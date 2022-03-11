import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
  Paypal,
  CreditCard,
} from 'react-bootstrap-icons';
import { vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Ratings from '../../../../shared/components/ratings/ratings';
import './payment.scss';
import Height from '../../../../shared/components/height/height';

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

function Payment() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_vendors');

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Payment</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select> */}

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          {/* <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            New vendor
          </Button> */}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3
              className="hoverPointer"
              onClick={() => setTable('all_gateways')}
            >
              All gateways
            </h3>
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
          <div style={{ padding: '34px 38px' }}>
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <Link to="/app/manage/payment/paypal">
                  <div className="upload-space pay-option dflex alc jcc">
                    <div className="upload-space-text dflex jcc alc flex-columm">
                      <Paypal size={75} />
                      <p>Paypal</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="upload-space  pay-option dflex alc jcc">
                  <div className="upload-space-text dflex alc jcc flex-columm">
                    <CreditCard size={75} />
                    <p>Credit Card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Height val={260} />
        </Card>
      </section>
    </main>
  );
}

export default Payment;
