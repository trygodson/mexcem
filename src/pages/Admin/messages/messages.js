import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
import { Archive, Search, Pencil, XCircle, PersonPlus, Plus } from 'react-bootstrap-icons';
import { messageMessages, messageTopics } from '../../../shared/hooks/api/testService.js';
import RippleTable from '../../../shared/components/tables/table/TableCard';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
import Modal from '../../../shared/components/modals';

import CustomText from '../../../shared/components/customtext/customtext';
import Height from '../../../shared/components/height/height';
import Input from '../../../shared/components/input/input';
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

function Messages() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_messages'); // topics
  const [loading, setLoading] = useState(true)
  const [messagetabledata, setMessageTableData] = useState([])
  const [topictabledata, setTopicTableData] = useState([])

  const [hideMessagesTable, setHideMessagesTable] = useState(false);
  const [hideTopicsTable, setHideTopicsTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  const defaultHrWidth = 117;
  const [hrWidth, setHrWidth] = useState(defaultHrWidth);

  const [openNewTopic, setOpenNewTopic] = useState(false);

  useEffect(() => {
    if (table === 'all_messages') {
      setHideMessagesTable(false);
      setHideTopicsTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else {
      setHideMessagesTable(true);
      setHideTopicsTable(false);
      setHrMarginLeft(155);
    }
  }, [table]);


  useEffect(
    async () => {
      const data = await messageMessages()
      const feedback = await messageTopics()
      setMessageTableData(data.data)
      setTopicTableData(feedback.data)
      setLoading(false)
    }, [messagetabledata]
  )

  // all messages
  const messagesDecorator = [

    {
      label: 'Date',
      accessor: 'date_data',
      Cell: props => (
        <div style={{paddingLeft: '15px'}}>
          <span>{props.date}</span>
          <br />
          <small>{props.time}</small>
        </div>
      ),
    },
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Users',
      accessor: 'users',
      Cell: props => <>{props}</>,
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

  const messagesTable = (
    <NewTable decorator={messagesDecorator} tableData={messagetabledata} isloading={loading} bulkAction={true} addcheckbox={false} hide={hideMessagesTable}/>
  );

  // topics
  const topicsDecorator = [

    {
      label: 'Date',
      accessor: 'date',
      Cell: props => <div style={{paddingLeft: '15px'}}>{props}</div>,
    },
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'User type',
      accessor: 'user_type',
      Cell: props => <>{props}</>,
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

  const topicsTable = (
    <NewTable decorator={topicsDecorator} tableData={topictabledata} isloading={loading} bulkAction={true} addcheckbox={false} hide={hideTopicsTable}/>
  );

  const renderTable = () => {
    return (
      <>
        {messagesTable}
        {topicsTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Message</b>
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

          {table == 'all_messages' && (
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => {}}
              style={{ width: '120px' }}
            >
              <Plus size={12.5} />
              New message
            </Button>
          )}

          {table == 'topics' && (
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => setOpenNewTopic(true)}
            >
              <Plus size={12.5} />
              New topic
            </Button>
          )}
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer" onClick={() => setTable('all_messages')}>
              All messages
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('topics')}>
              Topics
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
        {openNewTopic && (
          <Modal
            customModalBodyClass="paddingNone"
            width={680}
            closeModal={() => setOpenNewTopic(false)}
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                Add new wheel diameter
              </CustomText>
              <Height val={20} />
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <h4>Title</h4>
                    <Input className="modal-x-input" />
                  </div>
                  <div className="form-group">
                    <h4>User type</h4>
                    <Input className="modal-x-input" placeholder="Select user type" />
                  </div>
                </div>
              </div>
              <Height val={16} />
              <div className="row">
                <div className="col-6 ">
                  <Button className="btn-block center-container-btn danger-outline-btn">
                    Cancel
                  </Button>
                </div>
                <div className="col-6 ">
                  <Button className="btn-block center-container-btn btn-success">Submit</Button>
                </div>
              </div>
            </div>
            <Height val={18} />
          </Modal>
        )}
      </section>
    </main>
  );
}

export default Messages;
