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
} from 'react-bootstrap-icons';
import { vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Ratings from '../../../../shared/components/ratings/ratings';
import { vendorDetailsReviews } from '../../../../shared/hooks/api/testService';
import Height from '../../../../shared/components/height/height';
import './vendordetail.scss';
import NewTable from '../../../../shared/components/newTable/newtable';

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

function VendorDetails() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_vendors');
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await vendorDetailsReviews();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  const decorator = [
    {
      label: 'Purchase',
      accessor: 'purchase',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Customer',
      accessor: 'customer',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Date & Time',
      accessor: 'date',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Rating',
      accessor: 'rating',
      Cell: props => <Ratings val={props} size={14} />,
    },
    {
      label: 'Price range',
      accessor: 'price_range',
      Cell: props => (
        <>
          ${props.lower} - ${props.upper}
        </>
      ),
    },
    {
      label: 'View',
      accessor: '_id',
      Cell: props => <>View</>,
    },
  ];

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Vendors</b>
          </span>
        }
      >
        <></>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('walmart')}>
              Walmart
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
          <div className="bootstrap-wrapper">
            <div className="row">
              <div className="col-sm-12 col-lg-7">
                <div className="vendor__">
                  <div className="row">
                    <div className="col-4">
                      <img src="a.jpg" />
                    </div>
                    <div className="col-4">
                      <b>Walmart</b>
                      <p>Vendor name</p>
                      <Height val={11} />
                      <p>
                        <Ratings val={4} size={18} />
                      </p>
                      <p>Overall rating</p>
                    </div>
                    <div className="col-4">
                      <p>
                        <b>+1 4155552671</b>
                        <br />
                        <span>Phone</span>
                      </p>
                      <br />
                      <p>
                        <b>sj@auxcar.co</b>
                        <br />
                        <span>Email</span>
                      </p>
                      <br />
                      <p>
                        <b>Walmart.com</b>
                        <br />
                        <span>Website</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5 _vendor_details">
                <div className="row">
                  <div className="col-6">
                    <p>
                      <b>+1 4155552671</b>
                      <br />
                      <span>Address</span>
                    </p>
                    <br />

                    <p>
                      <b>Arizona</b>
                      <br />
                      <span>State</span>
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <b>Phoenix</b>
                      <br />
                      <span>City</span>
                    </p>
                    <br />
                    <p>
                      <b>United States</b>
                      <br />
                      <span>Country</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Height val={30} />
        </Card>
      </section>

      <Height val={55} />

      <PageTitle title={<></>}>
        <>
          <input
            placeholder="Search"
            className="search"
            style={{ width: '180px' }}
          />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>
        </>
      </PageTitle>

      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3
              className="hoverPointer"
              onClick={() => setTable('all_vehicles')}
            >
              Recent reviews
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
        </Card>
        <NewTable
          decorator={decorator}
          tableData={tabledata}
          isloading={loading}
          addcheckbox={true}
        />
      </section>
    </main>
  );
}

export default VendorDetails;
