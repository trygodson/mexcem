import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Archive, Pencil, XCircle, Plus, Calendar3, Cash } from 'react-bootstrap-icons';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import { rewardsRewardProgram } from '../../../../shared/hooks/api/testService';
import LineChartDraw from '../../../../shared/components/linechartdraw/linechartdraw';
import BasicCard from '../../../../shared/components/card/basiccard/basiccard';
import MaterialCard from '../../../../shared/components/card/materialcard/materialcard';
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

function Rewards() {
  const modalRef = useRef();

  const [table, setTable] = useState('statistics'); // reward_program
  const [loading, setLoading] = useState(true)
  const [rewardprogramtabledata, setRewardProgramTableData] = useState([])

  const [hideStatistics, setHideStatistics] = useState(false);
  const [hideRewardProgramTable, setHideRewardProgramTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  const defaultHrWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  useEffect(() => {
    if (table === 'statistics') {
      setHideStatistics(false);
      setHideRewardProgramTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
      setHrWidth(defaultHrWidth);
    } else {
      setHideStatistics(true);
      setHideRewardProgramTable(false);
      setHrMarginLeft(166);
      setHrWidth(150);
    }
  }, [table]);

  useEffect(
    async () => {
      const data = await rewardsRewardProgram()
      setRewardProgramTableData(data.data)
      setLoading(false)
    }, [rewardprogramtabledata]
  )


  // all statistics
  const statistics = (
    <div className={hideStatistics && 'hide'}>
      <Card>
        <div className="row">
          <div className="col-4">
            <MaterialCard
              title="Referral amount"
              icon={<Cash />}
              theme={{ background: colorScheme.white, color: colorScheme.darkPrimary2 }}
              total={'$10000'}
            />
          </div>
        </div>
        <LineChartDraw height={280} />
      </Card>
    </div>
  );

  // reware program
  const rewardProgramDecorator = [

    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Target group',
      accessor: 'target_group',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Points',
      accessor: 'points',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Cashback',
      accessor: 'cashback',
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

  const rewardProgramTable = (
    <NewTable decorator={rewardProgramDecorator} bulkAction={true} tableData={rewardprogramtabledata} isloading={loading} hide={hideRewardProgramTable}/>

  );

  const renderTable = () => {
    return (
      <>
        {statistics}
        {rewardProgramTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Manage / <b>Rewards</b>
          </span>
        }
      >
        <>
          <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">Select reward program</option>
          </select>

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input placeholder="Search" type="date" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Calendar3 size={15} style={iconStyle} />
          </Button>

          {/* {table == 'all_messages' && (
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => {}}
              style={{ width: '120px' }}
            >
              <Plus size={12.5} />
              New message
            </Button>
          )} */}

          <Button
            className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
            onClick={() => {}}
          >
            <Plus size={12.5} />
            New reward
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('statistics')}>
              Statistics
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('reward_program')}>
              Reward program
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

export default Rewards;
