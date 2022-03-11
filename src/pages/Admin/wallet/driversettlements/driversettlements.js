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
} from 'react-bootstrap-icons';
import {
  driverSettlementsPayOut,
  driverSettlementsPayIn,
  driverSettlementsProcessing,
} from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme, gridBreakpoints } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import NewTable from '../../../../shared/components/newTable/newtable';
import { useMediaQuery } from 'react-responsive';

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

function DriverSettlements() {
  const modalRef = useRef();

  const [table, setTable] = useState('pay_out'); // pay_in // processing
  const [loading, setLoading] = useState(true);
  const [payouttabledata, setPayoutTableData] = useState([]);
  const [payintabledata, setPayInTableData] = useState([]);
  const [processingtabledata, setProcessingTableData] = useState([]);

  const [hidePayOutTable, setHidePayOutTable] = useState(false);
  const [hidePayInTable, setHidePayInTable] = useState(true);
  const [hideProcessingTable, setHideProcessingTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  useEffect(() => {
    if (table === 'pay_out') {
      setHidePayOutTable(false);
      setHidePayInTable(true);
      setHideProcessingTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'pay_in') {
      setHidePayOutTable(true);
      setHidePayInTable(false);
      setHideProcessingTable(true);
      setHrMarginLeft(120);
    } else {
      setHidePayOutTable(true);
      setHidePayInTable(true);
      setHideProcessingTable(false);
      setHrMarginLeft(260);
    }
  }, [table]);

  const isSmallerThanLgScreen = useMediaQuery({
    query: `(max-width: ${gridBreakpoints.lg})`,
  });

  useEffect(async () => {
    const payout = await driverSettlementsPayOut();
    const payin = await driverSettlementsPayIn();
    const processing = await driverSettlementsProcessing();
    setPayoutTableData(payout.data);
    setPayInTableData(payin.data);
    setProcessingTableData(processing.data);
    setLoading(false);
  }, [payouttabledata, payintabledata]);

  // pay out
  const payOutDecorator = [
    // {
    //   label: 'Driver',
    //   accessor: 'image',
    //   Cell: props => <img src={props} style={imgStyle} />,
    // },
    {
      label: 'Driver',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span style={{ marginRight: '8px' }}>{props.name}</span>

          <span>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Vehicle no',
      accessor: 'vehicle_no',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Withdrawable',
      accessor: 'withdrawable',
      Cell: props => <span className="success">{`${props}`}</span>,
    },
    {
      label: 'Cash balance',
      accessor: 'cash_balance',
      Cell: props => <span className="status ">{`${props}`}</span>,
    },
    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
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

  const payOutTable = (
    <NewTable
      decorator={payOutDecorator}
      tableData={payouttabledata}
      isloading={loading}
      hide={hidePayOutTable}
      bulkAction={true}
    />
  );

  // pay in
  const payInDecorator = [
    // {
    //   label: 'Driver',
    //   accessor: 'image',
    //   Cell: props => <img src={props} style={imgStyle} />,
    // },
    {
      label: 'Driver',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span style={{ marginRight: '8px' }}>{props.name}</span>

          <span>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Vehicle no',
      accessor: 'vehicle_no',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Amount',
      accessor: 'amount',
      Cell: props => <span className="success">{`${props}`}</span>,
    },
    {
      label: 'Cash balance',
      accessor: 'cash_balance',
      Cell: props => <span className="status ">{`${props}`}</span>,
    },
    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
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

  const payInTable = (
    <NewTable
      decorator={payInDecorator}
      tableData={payintabledata}
      isloading={loading}
      hide={hidePayInTable}
      bulkAction={true}
    />
  );

  // processing
  const processingDecorator = [
    // {
    //   label: 'Driver',
    //   accessor: 'image',
    //   Cell: props => <img src={props} style={imgStyle} />,
    // },
    {
      label: 'Driver',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span style={{ marginRight: '8px' }}>{props.name}</span>

          <span>{props.telephone}</span>
        </>
      ),
    },
    {
      label: 'Vehicle no',
      accessor: 'vehicle_no',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Processing balance',
      accessor: 'processing_balance',
      Cell: props => <span className="success">{`${props}`}</span>,
    },
  ];

  const processingTable = (
    <NewTable
      decorator={processingDecorator}
      tableData={processingtabledata}
      isloading={loading}
      hide={hideProcessingTable}
      bulkAction={true}
    />
  );

  const renderTable = () => {
    return (
      <>
        {payOutTable}
        {payInTable}
        {processingTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span
            style={{
              marginBottom: '10px',
            }}
          >
            Wallet / Settlements <b>/ Driver</b>
          </span>
        }
      >
        <div>
          <select
            className="select-first"
            style={{ width: '220px', marginRight: '10px' }}
          >
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select>

          {/* <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button> */}

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
          </Button>
        </div>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('pay_out')}>
              Pay out
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('pay_in')}>
              Pay in
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('processing')}>
              Processing
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

export default DriverSettlements;
