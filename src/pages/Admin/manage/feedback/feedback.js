import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Archive, Trash, Search, Pencil, XCircle, CheckAll, Plus } from 'react-bootstrap-icons';
import { feedbackTickets, feedbackFeedbacks } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import Modal from '../../../../shared/components/modals';
import Height from '../../../../shared/components/height/height';
import Input from '../../../../shared/components/input/input';
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

function Feedback() {
  const modalRef = useRef();

  const [table, setTable] = useState('all_tickets'); // feedbacks
  const [loading, setLoading] = useState(true)
  const [tickettabledata, setTicketTableData] = useState([])
  const [feedbacktabledata, setFeedBackTableData] = useState([])

  const [hideTicketsTable, setHideTicketsTable] = useState(false);
  const [hideFeedbacksTable, setHideFeedbacksTable] = useState(true);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);
  const [openAddNewFeedbackModal, setOpenAddNewFeedbackModal] = useState(false);

  const eventProp = {
    onClick: () => setOpenFeedbackModal(true),
  };

  useEffect(() => {
    if (table === 'all_tickets') {
      setHideTicketsTable(false);
      setHideFeedbacksTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else {
      setHideTicketsTable(true);
      setHideFeedbacksTable(false);
      setHrMarginLeft(160);
    }
  }, [table]);

  useEffect(
    async () => {
      const data = await feedbackTickets()
      const feedback = await feedbackFeedbacks()
      setTicketTableData(data.data)
      setFeedBackTableData(feedback.data)
      setLoading(false)
    }, [tickettabledata, feedbacktabledata]
  )


  // All Tickets
  const ticketsDecorator = [

    {
      label: '#',
      accessor: 'hash',
      Cell: props => <span {...eventProp}>{props}</span>,
    },
    {
      label: 'User',
      accessor: 'user_data',
      Cell: props => (
        <span {...eventProp}>
          <span>{props.name}</span>
          <br />
          <span>{props.telephone}</span>
        </span>
      ),
    },
    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <span {...eventProp}>{props}</span>,
    },
    {
      label: 'User Type',
      accessor: 'user_type',
      Cell: props => <span {...eventProp}>{props}</span>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => (
        <span className="status success_span_text" {...eventProp}>
          {props}
        </span>
      ),
    },
    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper before primary_span_text">
            <CheckAll size={15.4} />
          </span>

          <span className="table-icon-wrapper before success_span_text">
            <Archive size={15.4} />
          </span>

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const ticketsTable = (
    <NewTable decorator={ticketsDecorator} tableData={tickettabledata} isloading={loading} hide={hideTicketsTable}/>
  );

  // feedbacks
  const feedbacksDecorator = [
    {
      label: '#',
      accessor: 'hash',
      Cell: props => <>{props}</>,
    },

    {
      label: 'Title',
      accessor: 'title',
      Cell: props => <>{props}</>,
    },
    {
      label: 'User Type',
      accessor: 'user_type',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => <span className="status success_span_text">{props}</span>,
    },
    {
      label: 'Actions',
      accessor: '_id',
      Cell: props => (
        <span className="actions">
          <span className="table-icon-wrapper before primary_span_text">
            <Pencil size={15.4} />
          </span>

          <span className="table-icon-wrapper before success_span_text">
            <Archive size={15.4} />
          </span>

          <span className="table-icon-wrapper  danger_span_text">
            <XCircle size={15.4} />
          </span>
        </span>
      ),
    },
  ];

  const feedbacksTable = (
    <NewTable decorator={feedbacksDecorator} tableData={feedbacktabledata} isloading={loading} hide={hideFeedbacksTable}/>
  );

  const renderTable = () => {
    return (
      <>
        {ticketsTable}
        {feedbacksTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Manage / <b>Feedback</b>
          </span>
        }
      >
        <>
          <select className="select-first" style={{ width: '220px', marginRight: '2px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select>
          {/* 
          <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button>

          {table == 'feedbacks' && (
            <Button
              className="dashboard-title-btn primary-dashboard-title-btn rightSpace"
              onClick={() => setOpenAddNewFeedbackModal(true)}
              style={{ width: '120px' }}
            >
              <Plus size={12.5} />
              Add new
            </Button>
          )}

          {/* <Button
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
            <h3 className="hoverPointer" onClick={() => setTable('all_tickets')}>
              All tickets
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('feedbacks')}>
              Feedbacks
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

        {openFeedbackModal && (
          <Modal
            customModalBodyClass="paddingNone"
            width={750}
            closeModal={() => setOpenFeedbackModal(false)}
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                User Feedback
              </CustomText>
              <Height val={20} />
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <h3>User</h3>
              <p style={{ color: colorScheme.faintPrimary4 }}>Stephen Jackson (driver)</p>
              <p>+1 4155552671</p>
              <br />
              <h3>Title</h3>
              <p>A brand-new, unused, unopened</p>
              <br />

              <h3>Description</h3>
              <p>
                A brand-new, unused, unopened, undamaged item in its original packaging (where
                packaging is applicable). Packaging should be the same as what is found in a retail
                store, unless the item is handmade or was packaged by the manufacturer in non-retail
                packaging, such as an unprinted box or plastic bag. See the seller's listing for
                full details
              </p>
              <br />
              <div className="row">
                <div className="col-6 " style={{ padding: '0 15px 0 0' }}>
                  <Button className="btn-block center-container-btn danger-outline-btn">
                    Cancel
                  </Button>
                </div>
                <div className="col-6 " style={{ padding: '0 0 0 15px' }}>
                  <Button className="btn-block center-container-btn btn-success">Submit</Button>
                </div>
              </div>
            </div>
            <Height val={18} />
          </Modal>
        )}
        {openAddNewFeedbackModal && (
          <Modal
            customModalBodyClass="paddingNone"
            width={600}
            closeModal={() => setOpenAddNewFeedbackModal(false)}
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                Add new feedback
              </CustomText>
              <Height val={20} />
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <h4>Title</h4>
                    <Input className="modal-x-input" />
                  </div>
                  <div className="form-group">
                    <h4>Status</h4>
                    <Input className="modal-x-input" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <h4>Status</h4>
                    <Height val={8} />
                    <select name="payment_type">
                      <option value="" disabled selected>
                        Select payment type
                      </option>
                      <option>Paypal</option>
                      <option>Cashapp</option>
                    </select>
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

export default Feedback;
