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
import {
  vehiclesVehicles,
  vehiclesBrand,
  vehiclesModel,
  vehiclesColor,
  vehiclesTireSize,
} from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import {
  pricingManageZone,
  pricingMeterPrice,
  pricingRateGroups,
  pricingTax,
} from '../../../../shared/hooks/api/testService';
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

function Pricing() {
  const modalRef = useRef();

  const [table, setTable] = useState('rate_groups'); // meter_price // manage_zone // tax
  const [loading, setLoading] = useState(true);
  const [rategrouptabledata, setRateGroupTableData] = useState([]);
  const [meterpricetabledata, setMeterPriceTableData] = useState([]);
  const [managezonetabledata, setManageZoneTableData] = useState([]);
  const [taxtabledata, setTaxTableData] = useState([]);

  const [hideRateGroupsTable, setHideRateGroupsTable] = useState(false);
  const [hideMeterPriceTable, setHideMeterPriceTable] = useState(true);
  const [hideManageZone, setHideManageZoneTable] = useState(true);
  const [hideTaxTable, setHideTaxTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  useEffect(() => {
    if (table === 'rate_groups') {
      setHideRateGroupsTable(false);
      setHideMeterPriceTable(true);
      setHideManageZoneTable(true);
      setHideTaxTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'meter_price') {
      setHideRateGroupsTable(true);
      setHideMeterPriceTable(false);
      setHideManageZoneTable(true);
      setHideTaxTable(true);
      setHrMarginLeft(190);
    } else if (table === 'manage_zone') {
      setHideRateGroupsTable(true);
      setHideMeterPriceTable(true);
      setHideManageZoneTable(false);
      setHideTaxTable(true);
      setHrMarginLeft(360);
    } else {
      // tax
      setHideRateGroupsTable(true);
      setHideMeterPriceTable(true);
      setHideManageZoneTable(true);
      setHideTaxTable(false);
      setHrMarginLeft(500);
    }
  }, [table]);

  useEffect(async () => {
    const manage = await pricingManageZone();
    const meter = await pricingMeterPrice();
    const rate = await pricingRateGroups();
    const tax = await pricingTax();
    setManageZoneTableData(manage.data);
    setMeterPriceTableData(meter.data);
    setRateGroupTableData(rate.data);
    setTaxTableData(tax.data);
    setLoading(false);
  }, [
    managezonetabledata,
    meterpricetabledata,
    rategrouptabledata,
    taxtabledata,
  ]);

  // rate groups
  const rateGroupsDecorator = [
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Base fare',
      accessor: 'base_fare',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Minimum fare',
      accessor: 'minimum_fare',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Charge per KM',
      accessor: 'charge_per_km',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Assist time charge',
      accessor: 'assist_time_charge',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before primary_span_text">
            <Pencil size={15.4} />
          </span>
          {/* <span className="table-icon-wrapper  before primary_span_text">
            <Archive size={15.4} />
          </span> */}

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const rateGroupsTable = (
    <NewTable
      decorator={rateGroupsDecorator}
      tableData={rategrouptabledata}
      isloading={loading}
      hide={hideRateGroupsTable}
      bulkAction={true}
    />
  );

  // meter price
  const meterPriceDecorator = [
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Calculation type',
      accessor: 'calculation_type',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Min distance',
      accessor: 'min_distance',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Max distance',
      accessor: 'max_distance',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Amount',
      accessor: 'amount',
      Cell: props => <>{`${props}`}</>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before primary_span_text">
            <Pencil size={15.4} />
          </span>
          {/* <span className="table-icon-wrapper  before primary_span_text">
            <Archive size={15.4} />
          </span> */}

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const meterPriceTable = (
    <NewTable
      decorator={meterPriceDecorator}
      tableData={meterpricetabledata}
      isloading={loading}
      hide={hideMeterPriceTable}
      bulkAction={true}
    />
  );

  // manage zone
  const manageZoneDecorator = [
    {
      label: 'TItle',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Country',
      accessor: 'country',
      Cell: props => <>{props}</>,
    },
    {
      label: 'State',
      accessor: 'state',
      Cell: props => <>{props}</>,
    },
    {
      label: 'From',
      accessor: 'from',
      Cell: props => <>{props}</>,
    },
    {
      label: 'To',
      accessor: 'to',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper  before primary_span_text">
            <Pencil size={15.4} />
          </span>
          {/* <span className="table-icon-wrapper  before primary_span_text">
            <Archive size={15.4} />
          </span> */}

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const manageZoneTable = (
    <NewTable
      decorator={manageZoneDecorator}
      tableData={managezonetabledata}
      isloading={loading}
      hide={hideManageZone}
      bulkAction={true}
    />
  );

  // tax
  const taxDecorator = [
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Country',
      accessor: 'country',
      Cell: props => <>{props}</>,
    },
    {
      label: 'State',
      accessor: 'state',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Tax amount',
      accessor: 'tax_amount',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
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
          {/* <span className="table-icon-wrapper  before primary_span_text">
            <Archive size={15.4} />
          </span> */}

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const taxTable = (
    <NewTable
      decorator={taxDecorator}
      tableData={taxtabledata}
      isloading={loading}
      hide={hideTaxTable}
      bulkAction={true}
    />
  );

  const renderTable = () => {
    return (
      <>
        {rateGroupsTable}
        {meterPriceTable}
        {manageZoneTable}
        {taxTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span style={{ fontWeight: 'bold', color: 'grey' }}>
            <b>Pricing / Rate group</b>
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
          </select>

          <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input
            placeholder="Search"
            className="search"
            style={{ width: '180px' }}
          />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            Add New
          </Button>
        </>
      </PageTitle>
      <section>
        {/* 'rate_groups'); // meter_price // manage_zone // tax */}
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3
              className="hoverPointer"
              onClick={() => setTable('rate_groups')}
            >
              Rate Groups
            </h3>
            <h3
              className="hoverPointer"
              onClick={() => setTable('meter_price')}
            >
              Meter Price
            </h3>
            <h3
              className="hoverPointer"
              onClick={() => setTable('manage_zone')}
            >
              Manage Zone
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('tax')}>
              Tax
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

export default Pricing;
