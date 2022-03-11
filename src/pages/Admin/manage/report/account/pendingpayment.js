import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../../shared/components/button/button';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
  Calendar,
  CalendarEvent,
  Download,
} from 'react-bootstrap-icons';
import { customerreport } from '../../../../../shared/hooks/api/testService.js';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import Ratings from '../../../../../shared/components/ratings/ratings';
import NewTable from '../../../../../shared/components/newTable/newtable';
import IconInput from '../../../../../shared/components/iconinput/iconinput';

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

function PendingPayment() {
  const modalRef = useRef();
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await customerreport();
    setTableData(data.data);
    console.log(tabledata);
    setLoading(false);
  }, []);

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span style={{ fontWeight: 'bold', color: 'grey' }}>
            Reports / Account / Pending Payment
          </span>
        }
      >
        <>
          {/* <select
            className="select-first"
            style={{ width: '220px', marginRight: '10px' }}
          >
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select> */}

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input
            placeholder="Filter: Date"
            className="search"
            type="date"
            style={{ width: '180px' }}
          />
          <Button className="search-btn" onClick={() => {}}>
            <CalendarEvent size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Download size={12.5} className="mx-1" />
            Export
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple dflex jcb alc">
            <div className="dflex jcb alc">
              <h5>Pending Payment</h5>
            </div>
            <div className="dflex jcb">
              <input
                type="text"
                className="grey_input"
                placeholder="Search"
                style={{ width: 'auto' }}
              />
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
          <div>
            <div className="table-responsive">
              <table className="table table-hover  mb-0 text-md-nowrap ">
                <thead style={{ height: '70px' }}>
                  <tr>
                    <th className="">Driver</th>
                    <th className="text-center">Total</th>
                    <th className="text-center">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <span>Payout</span>
                    </td>
                    <td className="text-center">
                      <span>$10000</span>
                    </td>
                    <td className="text-center">
                      <span
                        style={{
                          backgroundColor: 'yellow',
                          padding: '3px 5px',
                          fontWeight: 'bold',
                          borderRadius: '7px',
                        }}
                      >
                        0
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <span>Refund</span>
                    </td>
                    <td className="text-center">
                      <span>$25000</span>
                    </td>
                    <td className="text-center">
                      <span
                        style={{
                          backgroundColor: 'red',
                          padding: '3px 5px',
                          fontWeight: 'bold',
                          borderRadius: '7px',
                        }}
                      >
                        0
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-hover  mb-0 text-md-nowrap ">
                <thead style={{ height: '70px' }}>
                  <tr>
                    <th className="">Customer</th>
                    <th className="">Total</th>
                    <th className="text-center">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <span>Payout</span>
                    </td>
                    <td className="">
                      <span>$10000</span>
                    </td>
                    <td className="text-center">
                      <span
                        style={{
                          backgroundColor: 'yellow',
                          padding: '3px 5px',
                          fontWeight: 'bold',
                          borderRadius: '7px',
                        }}
                      >
                        0
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <span>Refund</span>
                    </td>
                    <td className="">
                      <span>$25000</span>
                    </td>
                    <td className="text-center">
                      <span
                        style={{
                          backgroundColor: 'red',
                          padding: '3px 5px',
                          fontWeight: 'bold',
                          borderRadius: '7px',
                        }}
                      >
                        0
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <span>Membership</span>
                    </td>
                    <td className="">
                      <span>$25000</span>
                    </td>
                    <td className="text-center">
                      <span
                        style={{
                          backgroundColor: '#2699FB',
                          padding: '3px 5px',
                          fontWeight: 'bold',
                          borderRadius: '7px',
                        }}
                      >
                        0
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <span>Subscription</span>
                    </td>
                    <td className="">
                      <span>$25000</span>
                    </td>
                    <td className="text-center">
                      <span
                        style={{
                          backgroundColor: '#1AD598',
                          padding: '3px 5px',
                          fontWeight: 'bold',
                          borderRadius: '7px',
                        }}
                      >
                        0
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default PendingPayment;
