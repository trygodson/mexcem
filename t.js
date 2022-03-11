import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import emptyImage from '../../../../assets/undraw_empty.png';
import DatetimeRangePicker from 'react-datetime-range-picker';
import moment from 'moment';
import { PageLoader } from '../../../others/loader';
import { withRouter } from 'react-router';
const CompleteTable = props => {
  const {
    url,
    path_Id,
    table_title,
    table_data,
    action_column,
    actions,
    rowCount,
    fiterTypes,
    select_column,
    bold_title,
    getAllSelectedItems,
    Statuses,
    Estates,
    Bool,
  } = props;

  // the below function helps to directly traverse the hierarchy of objects to find a value regardless the depth
  const findprop = (obj, path) => {
    var args = path.split('.'),
      i,
      l;
    for (i = 0, l = args.length; i < l; i++) {
      if (!obj.hasOwnProperty(args[i])) return;
      obj = obj[args[i]];
    }
    return obj;
  };

  // function below formats a table cell into dateTime using moment if the data item is a dateTime type of data
  const formatIfDateObject = item => {
    if (typeof item === 'boolean') {
      return JSON.stringify(item);
    } else if (typeof item === 'number' || typeof item === 'undefined' || item === null) {
      return item;
    } else {
      const removeSpace_item = item.split(' ').join('');
      if (moment(Date.parse(removeSpace_item)).isValid()) {
        return moment(item).format('LLLL') !== 'Invalid date' ? moment(item).format('LLLL') : item;
      } else {
        return item;
      }
    }
  };

  const [RequestRes, updateRequestRes] = useState('');
  const [IsLoading, setIsloading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(1);

  const [Name, SetName] = useState('');

  const [VisitCode, SetVisitCode] = useState('');

  const [Status, setStatus] = useState('');

  const [StartDate, setStartDate] = useState(moment().subtract(1, 'years').toISOString());
  const [EndDate, setEndDate] = useState(moment().toISOString());

  const [SearchType, SetSearchType] = useState('');

  const [SelectedItems, SetSelectedItems] = useState([]);

  const [SearchedEstate, SetSearchedEstate] = useState('');
  const [BoolValue, SetBoolValue] = useState('');

  const [PATH_IDD, SetPATH_IDD] = useState(path_Id);

  const handlePageChange = pageIndex => {
    const currenPageIndex = pageIndex.selected + 1;
    setCurrentPage(currenPageIndex);
  };

    useEffect(async () => {
        setIsloading(true);
        const res = await url({
        path_Id: PATH_IDD,
        pageNumber: CurrentPage,
        pageSize: 8,
        Name: Name,
        FromDate: StartDate,
        ToDate: EndDate,
        VisitationCode: VisitCode,
        Status: Status,
        id: PATH_IDD,
        SearchedEstate: SearchedEstate,
        Bool: BoolValue,
        });
        updateRequestRes(res);
        setIsloading(false);
    }, [
        PATH_IDD,
        CurrentPage,
        Name,
        StartDate,
        EndDate,
        VisitCode,
        Status,
        SearchedEstate,
        BoolValue,
    ]);

    const handleSearchTypeChange = e => {
        SetSearchType(e.target.value);
        // if (e.target.value === "Date") {
        SetVisitCode('');
        SetName('');
        setStatus('');
        SetSearchedEstate('');
        // document.getElementById("StatusSelect").selectedIndex = "0";
        // }
    };

    // checks if there is row count props , it then returns the number of items from the response
    if (rowCount) {
        rowCount(RequestRes.rowCount);
    }

    //function that handles the selecton of items using checkbox
    const handleCheck = (e, checkItem) => {
        if (e.target.checked) {
        SetSelectedItems([...SelectedItems, checkItem]);
        // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
        if (getAllSelectedItems) {
            getAllSelectedItems([...SelectedItems, checkItem]);
        }
        } else {
        window.$(' #combinedCheck').prop('checked', false);
        SetSelectedItems(SelectedItems.filter(item => item.id !== checkItem.id));
        // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
        if (getAllSelectedItems) {
            getAllSelectedItems(SelectedItems.filter(item => item.id !== checkItem.id));
        }
        }
    };

    //function that handles the selecton of  "ALL"  items items on the table using checkbox
    const handleCombinedCheck = e => {
        if (e.target.checked) {
        window.$('input:checkbox').prop('checked', true);
        SetSelectedItems(RequestRes.data);
        // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
        if (getAllSelectedItems) {
            getAllSelectedItems(RequestRes.data);
        }
        } else {
        window.$('input:checkbox').prop('checked', false);
        SetSelectedItems([]);
        // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
        if (getAllSelectedItems) {
        getAllSelectedItems([]);
      }
    }
  };

  return (
    <div className="row">
      <div className="col-xl-12 ">
        <div className="card">
          <div className="card-header pb-0 mg-b-5">
            <h2 className="">{bold_title}</h2>
            <div className="d-flex justify-content-between ">
              <h2 className="card-title mg-b-20">{table_title}</h2>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-6  mb-3">
                <div className="dataTables_length " id="example1_length">
                  {fiterTypes && (
                    <div className="d-flex">
                      <div className="mr-2 my-auto">Filter By:</div>
                      <select
                        style={{ width: 200 }}
                        className="form-control"
                        onChange={handleSearchTypeChange}
                      >
                        <option selected value="">
                          {' '}
                          -- select an option --{' '}
                        </option>
                        {fiterTypes.map(item => (
                          <option value={item}>{item}</option>
                        ))}
                        {/* extra option for if theres a filter type of boolean e.g (isCLosed) */}
                        {Bool && <option value={'Bool'}>{Bool}</option>}
                      </select>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                <div id="example1_filter" className="dataTables_filter">
                  {SearchType == 'Name' && (
                    <form className="form-inline" onSubmit={'handleNameSubmit'}>
                      <div className="form-group mb-2 mr-2">Search By Name</div>
                      <div className="form-group  mb-2">
                        <label htmlFor="inputName" className="sr-only">
                          Name
                        </label>
                        <input
                          type="name"
                          className="form-control "
                          placeholder="Search..."
                          autocomplete="off"
                          aria-controls="example1"
                          value={Name}
                          onChange={e => SetName(e.target.value)}
                        />
                      </div>
                      {/* <button type="submit" className="btn btn-primary mb-2"><FaSearch /></button> */}
                    </form>
                  )}
                  {SearchType == 'Date' && (
                    <div className="d-flex ">
                      <div className="my-auto mr-2">Search by Date</div>
                      <DatetimeRangePicker
                        closeOnSelect={true}
                        startDate={StartDate}
                        endDate={EndDate}
                        onStartDateChange={sd => setStartDate(sd.toISOString())}
                        onEndDateChange={ed => setEndDate(ed.toISOString())}
                        className={'d-flex date-time-picker'}
                        inputProps={{ placeholder: 'aa' }}
                      />
                    </div>
                  )}
                  {SearchType == 'Visitation Code' && (
                    <form className="form-inline">
                      <div className="form-group mb-2 mr-2">Search By Visitation Code</div>
                      <div className="form-group  mb-2">
                        <label htmlFor="inputName" className="sr-only">
                          Visitation Code
                        </label>
                        <input
                          type="name"
                          className="form-control "
                          placeholder="Enter code..."
                          autocomplete="off"
                          aria-controls="example1"
                          value={VisitCode}
                          onChange={e => SetVisitCode(e.target.value)}
                        />
                      </div>
                      {/* <button type="submit" className="btn btn-primary mb-2"><FaSearch /></button> */}
                    </form>
                  )}
                  {SearchType == 'Status' && (
                    <form className="form-inline">
                      <div className="form-group mb-2 mr-2">Filter By Status</div>
                      <div className="form-group  mb-2">
                        <select
                          style={{ width: 200 }}
                          className="form-control"
                          id="StatusSelect"
                          onChange={e => setStatus(e.target.value)}
                        >
                          <option selected value="">
                            {' '}
                            -- select an option --{' '}
                          </option>
                          {Statuses.map(status => (
                            <option value={status.value}>{status.label}</option>
                          ))}
                        </select>
                      </div>
                      {/* <button type="submit" className="btn btn-primary mb-2"><FaSearch /></button> */}
                    </form>
                  )}

                  {SearchType == 'Estate' && (
                    <form className="form-inline">
                      <div className="form-group mb-2 mr-2">Filter By Estate</div>
                      <div className="form-group  mb-2">
                        <select
                          style={{ width: 200 }}
                          className="form-control"
                          id="StatusSelect"
                          onChange={e => SetSearchedEstate(e.target.value)}
                        >
                          <option selected value="">
                            {' '}
                            -- select an option --{' '}
                          </option>
                          {Estates.map(estate => (
                            <option value={estate.id}>{estate.name}</option>
                          ))}
                        </select>
                      </div>
                    </form>
                  )}
                  {SearchType == 'Bool' && (
                    <form className="form-inline">
                      <div className="form-group mb-2 mr-2">{Bool}</div>
                      <div className="form-group  mb-2">
                        <select
                          style={{ width: 200 }}
                          className="form-control"
                          id="StatusSelect"
                          onChange={e => SetBoolValue(e.target.value)}
                        >
                          <option selected value="">
                            {' '}
                            -- select an option --{' '}
                          </option>
                          <option value={true}>True</option>)<option value={false}>False</option>)
                        </select>
                      </div>
                    </form>
                  )}
                  {SearchType == 'TenanT Type' && (
                    <form className="form-inline">
                      <div className="form-group mb-2 mr-2">Filter By Tenant Type</div>
                      <div className="form-group  mb-2">
                        <select
                          style={{ width: 200 }}
                          className="form-control"
                          id="StatusSelect"
                          onChange={e => SetPATH_IDD(e.target.value)}
                        >
                          <option selected value="">
                            {' '}
                            -- select an option --{' '}
                          </option>
                          <option value={1}>Estate</option>)<option value={2}>Personal Home</option>
                          )<option value={3}>Estate Facility Company</option>)
                          <option value={4}>Security Company</option>)
                          <option value={5}>Estate Facility Manager</option>)
                          <option value={6}>Head Quarter</option>)
                        </select>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="card-body" style={{ minHeight: 200 }}>
            {IsLoading ? (
              <PageLoader type={'TailSpin'} size={60} />
            ) : RequestRes.data.length ? (
              <div className="table-responsive">
                <table className="table table-hover mb-0 text-md-nowrap ">
                  <thead>
                    <tr>
                      {select_column && (
                        <th>
                          <input type="checkbox" id="combinedCheck" onClick={handleCombinedCheck} />
                        </th>
                      )}
                      {table_data.map(item => (
                        <th>{item.header}</th>
                      ))}
                      {action_column && (
                        <th className="text-danger">
                          <i>
                            <b>Action</b>
                          </i>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {RequestRes.data.map(res => {
                      return (
                        <tr>
                          {select_column && (
                            <td>
                              <input type="checkbox" onClick={e => handleCheck(e, res)} />
                            </td>
                          )}
                          {table_data.map(item => (
                            <td>{formatIfDateObject(findprop(res, item.accessor))}</td>
                          ))}

                          {action_column && (
                            <td>
                              <div className="dropdown ">
                                <button
                                  className="btn-primary btn btn-sm btn btn-outline-light dropdown-toggle"
                                  id="dropdownMenuButton"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  style={{ borderRadius: 15 }}
                                >
                                  {' '}
                                  Action{' '}
                                </button>

                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  {actions.map(action => (
                                    <a
                                      className="dropdown-item"
                                      onClick={() => action.Action(res, props.history.push)}
                                    >
                                      {action.label}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="col-sm-12 col-md-7 mt-3">
                  <ReactPaginate
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                    initialPage={CurrentPage - 1}
                    pageCount={RequestRes.pageCount}
                    pageRangeDisplayed={RequestRes.pageCount}
                    onPageChange={handlePageChange}
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                  />
                </div>
              </div>
            ) : (
              <div className=" d-flex justify-content-center">
                <div className="d-flex flex-column">
                  <img height="300px" src={emptyImage} className="mb-2" />
                  <div className="text-center">Nothing to show</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(CompleteTable);
