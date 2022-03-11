import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, Clock, PlusLg } from 'react-bootstrap-icons';
import Card from '../../../shared/components/card/card';
import Height from '../../../shared/components/height/height';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import { Link } from 'react-router-dom';
import {
  Archive,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
} from 'react-bootstrap-icons';
import { vehiclesVehicles } from '../../../shared/hooks/api/testService.js';
import { colorScheme } from '../../../default';
import CustomSwitch from '../../../shared/components/customswitch/customswitch';
import './customerVehicle.scss';
import NewTable from '../../../shared/components/newTable/newtable';

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

function CustomerVehicle() {
  const modalRef = useRef();

  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await vehiclesVehicles();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  // all vehicles
  const vehiclesDecorator = [
    {
      label: 'Plate number',
      accessor: 'vehicle_data',
      Cell: props => (
        <span>
          {props.plate_number}
          <br />
          Color: {props.color}
        </span>
      ),
    },
    {
      label: 'Brand',
      accessor: 'brand',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Model',
      accessor: 'model',
      Cell: props => <>{props}</>,
    },
    {
      label: 'User',
      accessor: 'user',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => (
        <>
          <CustomSwitch defaultChecked={props} />
        </>
      ),
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before success_span_text">
            <Pencil size={15.4} />
          </span>
          <span className="table-icon-wrapper  before primary_span_text">
            <Archive size={15.4} />
          </span>

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  return (
    <main>
      <PageTitle title={<h2 className="left">Vehicle</h2>}>
        <></>
      </PageTitle>
      <Height val={8} />
      <div className="row">
        <div className="col-4">
          <Card>
            <h3>Summary</h3>
            <Height val={10} />
            <div className="row top">
              <div className="icon-number-holder">
                <div className="icon-holder primary_span_text">
                  <i className="fi fi-rr-school-bus primary_span_text"></i>
                </div>
                <div className="count-holder">
                  <span className="total">Total</span>
                  <h4 className="number">10</h4>
                </div>
              </div>
              <div className="add-vehicle-button success_span_text">
                <PlusLg size={16} />
                <span className="name">Add Vehicle</span>
              </div>
            </div>
            <Height val={10} />
            <p>Default</p>

            <div className="row bottom">
              <div className="text-holder">
                <h5 className="car-name">Mecedez Benz</h5>
                <p className="code">ASXD124</p>
              </div>
              <ChevronRight size={18} />
            </div>
          </Card>
        </div>
      </div>
      <div>
        <section>
          <Card className="paddingNone" style={customCardStyle}>
            <div className="card-padded-title multiple">
              <h3
                className="hoverPointer"
                onClick={() => setTable('all_vehicles')}
              >
                All vehicles
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
            decorator={vehiclesDecorator}
            tableData={tabledata}
            isloading={loading}
            addcheckbox={true}
          />
        </section>
      </div>
    </main>
  );
}

export default CustomerVehicle;
