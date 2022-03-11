import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import {
  Archive,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
} from 'react-bootstrap-icons';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import {
  familyPlanMembers,
  familyPlanPlans,
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

const imgStyle = {
  width: '45px',
  borderRadius: '50%',
};

function FamilyPlan() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_members'); // topics
  const [loading, setLoading] = useState(true);
  const [membertabledata, setMemberTableData] = useState([]);
  const [planstabledata, setPlansTableData] = useState([]);

  const [hideMembersTable, setHideMembersTable] = useState(false);
  const [hidePlansTable, setHidePlansTable] = useState(true);

  const defaultHrMarginLeft = 16;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  const defaultHrWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  useEffect(() => {
    if (table === 'all_members') {
      setHideMembersTable(false);
      setHidePlansTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else {
      setHideMembersTable(true);
      setHidePlansTable(false);
      setHrMarginLeft(180);
    }
  }, [table]);

  useEffect(async () => {
    const data = await familyPlanPlans();
    const memberdata = await familyPlanMembers();
    setPlansTableData(data.data);
    setMemberTableData(memberdata.data);
    setLoading(false);
  }, [planstabledata, membertabledata]);

  // all members
  const membersDecorator = [
    {
      label: 'Name',
      accessor: 'user_data',
      Cell: props => (
        <>
          <span>{props.name}</span>
          <br />
          <span>{props.telephone}</span>
        </>
      ),
    },

    {
      label: 'Email',
      accessor: 'email',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Role',
      accessor: 'role',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Plan',
      accessor: 'plan',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <CustomSwitch defaultSwitch={props} />,
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

  const membersTable = (
    <NewTable
      decorator={membersDecorator}
      tableData={membertabledata}
      isloading={loading}
      addcheckbox={true}
      bulkAction={true}
      hide={hideMembersTable}
    />
  );

  // plans
  const plansDecorator = [
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Limit',
      accessor: 'limit',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Fee',
      accessor: 'fee',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Members',
      accessor: 'members',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <CustomSwitch defaultSwitch={props} />,
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

  const plansTable = (
    <NewTable
      decorator={plansDecorator}
      tableData={planstabledata}
      isloading={loading}
      hide={hidePlansTable}
      bulkAction={true}
    />
  );

  const renderTable = () => {
    return (
      <>
        {membersTable}
        {plansTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Family plan</b>
          </span>
        }
      >
        <>
          <select
            className="select-first"
            style={{ width: '220px', marginRight: '10px' }}
          >
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>

          {/* <select className="select-first" style={{ width: '220px' }}>
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

          {table == 'all_members' && (
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => {}}
              style={{ width: '120px' }}
            >
              <Plus size={12.5} />
              Add new
            </Button>
          )}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3
              className="hoverPointer"
              onClick={() => setTable('all_members')}
            >
              All members
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('plans')}>
              Plans
            </h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: `${hrWidth}px`,
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

export default FamilyPlan;
