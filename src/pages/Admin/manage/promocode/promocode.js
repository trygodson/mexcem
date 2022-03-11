import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Archive, Trash, Search, Pencil, XCircle, PersonPlus, Plus } from 'react-bootstrap-icons';
import { promocode, vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Ratings from '../../../../shared/components/ratings/ratings';
import { toolbox } from '../../../../shared/hooks/api/testService';
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

function Promocode() {
  const modalRef = useRef();
  const [loading, setLoading] = useState(true)
  const [tabledata, setTableData] = useState([])


  useEffect(
    async () => {
      const data = await promocode()
      setTableData(data.data)
      setLoading(false)
    }, [ tabledata]
  )


  const decorator = [

    {
      label: 'title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Discount',
      accessor: 'discount',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Expiration',
      accessor: 'expiration',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Used count',
      accessor: 'used_count',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper before success_span_text">
            <Pencil size={15.4} />
          </span>
          <span className="table-icon-wrapper before primary_span_text">
            <Archive size={15.4} />
          </span>

          <span className="table-icon-wrapper danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Manage / <b>Promo code</b>
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

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            Add new
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer">All promo codes</h3>
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
        <NewTable decorator={decorator} tableData={tabledata} isloading={loading} addcheckbox={true}/>

      </section>
    </main>
  );
}

export default Promocode;
