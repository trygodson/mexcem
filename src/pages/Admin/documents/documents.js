import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
import { Archive, Trash, Search, Pencil, XCircle, Plus } from 'react-bootstrap-icons';
import {
  documentsDriver,
  documentsManager,
  documentsVehicle,
} from '../../../shared/hooks/api/testService.js';
import RippleTable from '../../../shared/components/tables/table/TableCard';
import CustomText from '../../../shared/components/customtext/customtext';
import { rootApp } from '../../../routes';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
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

function Documents() {
  const modalRef = useRef();

  const [table, setTable] = useState('driver'); // manager // vehicle
  const [loading, setLoading] = useState(true)
  const [drivertabledata, setDriverTableData] = useState([])
  const [managertabledata, setmanagerTableData] = useState([])
  const [vehicletabledata, setVehicleTableData] = useState([])

  const [hideDriverTable, setHideDriverTable] = useState(false);
  const [hideManagerTable, setHideManagerTable] = useState(true);
  const [hideVehicleTable, setHideVehicleTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  useEffect(() => {
    if (table === 'driver') {
      setHideDriverTable(false);
      setHideManagerTable(true);
      setHideVehicleTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'manager') {
      setHideDriverTable(true);
      setHideManagerTable(false);
      setHideVehicleTable(true);
      setHrMarginLeft(120);
    } else {
      setHideDriverTable(true);
      setHideManagerTable(true);
      setHideVehicleTable(false);
      setHrMarginLeft(260);
    }
  }, [table]);

  useEffect(
    async () => {
      const data = await documentsDriver()
      const managerdata = await documentsManager()
      const vehicledata = await documentsVehicle()
      setDriverTableData(data.data)
      setmanagerTableData(managerdata.data)
      setVehicleTableData(vehicledata.data)
      setLoading(false)
    }, [drivertabledata, vehicletabledata, managertabledata]
  )

  // driver
  const driverDecorator = [
    {
      label: 'Name',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span style={{ marginLeft: '15px', }}>{props.name}</span>

          <span style={{ marginLeft: '15px' }}>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Documents',
      accessor: 'documents',
      Cell: props => <>{props}</>,
    },
  ];

  const driverTable = (
    <NewTable decorator={driverDecorator} tableData={drivertabledata} isloading={loading} addcheckbox={false} hide={hideDriverTable}/>

  );

  // manager
  const managerDecorator = [
    {
      label: 'Name',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span style={{ marginLeft: '15px' }}>{props.name}</span>
          <br />
          <span style={{ marginLeft: '15px' }}>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Documents',
      accessor: 'documents',
      Cell: props => <>{props}</>,
    },
  ];

  const managerTable = (
    <NewTable decorator={managerDecorator} tableData={managertabledata} isloading={loading} addcheckbox={false} hide={hideManagerTable}/>

  );

  // vehicle
  const vehicleDecorator = [
    {
      label: 'Name',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span style={{ marginLeft: '15px' }}>{props.name}</span>
          <br />
          <span style={{ marginLeft: '15px' }}>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Documents',
      accessor: 'documents',
      Cell: props => <>{props}</>,
    },
  ];

  const vehicleTable = (
    <NewTable decorator={vehicleDecorator} tableData={vehicletabledata} isloading={loading} addcheckbox={false} hide={hideVehicleTable}/>

  );

  const renderTable = () => {
    return (
      <>
        { driverTable}
        { managerTable}
        { vehicleTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle title={<span>Documents</span>}>
        <>
          {/* <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => { }}>
            <Search size={15} style={iconStyle} />
          </Button>

          <Link to={rootApp + '/document/types'}>
            <Button
              className="dashboard-title-btn primary_span_text rightSpace"
              onClick={() => { }}
              style={{ marginRight: '-1px', width: '148px', height: '32px' }}
            >
              Document types
            </Button>
          </Link>
          {/* 
          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            Export
          </Button>

          <Button
            className="dashboard-title-btn success_span_text rightSpace"
            onClick={() => {}}
            style={{ marginRight: '-1px' }}
          >
            Pay
          </Button> */}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('driver')}>
              Driver
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('manager')}>
              Manager
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('vehicle')}>
              Vehicle
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

export default Documents;
