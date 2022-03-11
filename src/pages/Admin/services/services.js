import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
import { Archive, Trash, Search, Pencil, XCircle, PersonPlus, Plus } from 'react-bootstrap-icons';
import {
  vehiclesVehicles,
  vehiclesBrand,
  vehiclesModel,
  vehiclesColor,
  vehiclesTireSize,
  servicesAssists,
  servicesInventory,
  servicesSubmissions,
} from '../../../shared/hooks/api/testService.js';
import RippleTable from '../../../shared/components/tables/table/TableCard';
import CustomText from '../../../shared/components/customtext/customtext';
import { rootApp } from '../../../routes';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
import CustomSwitch from '../../../shared/components/customswitch/customswitch';
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

const imgStyle = {
  width: '45px',
  borderRadius: '50%',
};

function Services() {
  const modalRef = useRef();

  const [table, setTable] = useState('assists'); // inventory // submissions
  const [loading, setLoading] = useState(true)
  const [assisttabledata, setAssistTableData] = useState([])
  const [inventorytabledata, setInventoryTableData] = useState([])
  const [submissiontabledata, setSubmissionTableData] = useState([])


  const [hideAssistsTable, setHideAssistsTable] = useState(false);
  const [hideInventoryTable, setHideInventoryTable] = useState(true);
  const [hideSubmissionsTable, setHideSubmissionsTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  useEffect(() => {
    if (table === 'assists') {
      setHideAssistsTable(false);
      setHideInventoryTable(true);
      setHideSubmissionsTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'inventory') {
      setHideAssistsTable(true);
      setHideInventoryTable(false);
      setHideSubmissionsTable(true);
      setHrMarginLeft(135);
    } else {
      // submissions
      setHideAssistsTable(true);
      setHideInventoryTable(true);
      setHideSubmissionsTable(false);
      setHrMarginLeft(295);
    }
  }, [table]);

  useEffect(
    async () => {
      const assist = await servicesAssists()
      const inventory = await servicesInventory()
      const submissions = await servicesSubmissions()
      setAssistTableData(assist.data)
      setInventoryTableData(inventory.data)
      setSubmissionTableData(submissions.data)
      setLoading(false)
    }, [assisttabledata, ]
  )

  // assist
  const assistDecorator = [

    {
      label: 'Assist',
      accessor: 'assist_details',
      Cell: props => (
        <span>
          {props.action}
          <br />
          {props.part}
        </span>
      ),
    },
    {
      label: 'Tools',
      accessor: 'tools',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Type',
      accessor: 'type',
      Cell: props => <span className="status success_span_text">{props}</span>,
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

  const assistsTable = (
    <NewTable decorator={assistDecorator} tableData={assisttabledata} isloading={loading} hide={hideAssistsTable}/>
  );

  // inventory
  const inventoryDecorator = [
    {
      label: 'Products',
      accessor: 'products',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Price range',
      accessor: 'price_range',
      Cell: props => (
        <>
          {`${props.lower} - ${props.upper}`}
        </>
      ),
    },
    {
      label: 'Vendors',
      accessor: 'vendors',
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

  const inventoryTable = (
    <NewTable decorator={inventoryDecorator} tableData={inventorytabledata} isloading={loading} hide={hideInventoryTable}/>
  );

  // submissions
  const submissionsDecorator = [

    {
      label: 'Driver',
      accessor: 'image',
      Cell: props => <img src={props} style={imgStyle} />,
    },
    {
      label: '',
      accessor: 'user_data',
      Cell: props => (
        <span>
          {props.name}
          <br />
          {props.telephone}
        </span>
      ),
    },
    {
      label: 'Vehicle no',
      accessor: 'vehicle_no',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Assist',
      accessor: 'assist',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      // mui
      Cell: props => <CustomSwitch defaultChecked={props} />,
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

  const submissionsTable = (
    <NewTable decorator={submissionsDecorator} tableData={submissiontabledata} isloading={loading} hide={hideSubmissionsTable}/>
  );

  const renderTable = () => {
    return (
      <>
        {assistsTable}
        {inventoryTable}
        {submissionsTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Vehicles</b>
          </span>
        }
      >
        <>
          <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>

          {table == 'assists' && (
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => {}}
              style={{ width: '110px' }}
            >
              <Plus size={12.5} />
              New assist
            </Button>
          )}

          {table == 'inventory' && (
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => {}}
              style={{ width: '110px' }}
            >
              <Plus size={12.5} />
              New product
            </Button>
          )}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('assists')}>
              Assists
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('inventory')}>
              Inventory
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('submissions')}>
              Submissions
            </h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '117px',
              marginLeft: `${hrMarginLeft}px`,
              height: '2.2px',
            }}
          />
          <hr style={customHrStyle} />
        </Card>
        {renderTable()}
      </section>
    </main>
  );
}

export default Services;
