import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import LoadingOverlay from 'react-loading-overlay';
import { Archive, Pencil, XCircle } from 'react-bootstrap-icons';
import './tableclass.scss';
import BulkActions from '../bulkactions/bulkactions';

const NewTable = props => {
  const {
    isloading,
    bulkAction = false,
    addcheckbox = true,
    decorator,
    tableData,
    hide = false,
    pagination = true,
  } = props;

  const [SelectedItems, SetSelectedItems] = useState([]);

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
    } else if (
      typeof item === 'number' ||
      typeof item === 'undefined' ||
      item === null
    ) {
      return item;
    } else {
      return item;
    }
  };

  //function that handles the selecton of items using checkbox
  const handleCheck = (e, checkItem) => {
    if (e.target.checked) {
      SetSelectedItems([...SelectedItems, checkItem]);
      // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
      // if (getAllSelectedItems) {
      //   getAllSelectedItems([...SelectedItems, checkItem])
      // }
    } else {
      window.$('#combinedCheck').prop('checked', false);
      SetSelectedItems(SelectedItems.filter(item => item.id !== checkItem.id));
      // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
      // if (getAllSelectedItems) {
      //   getAllSelectedItems(SelectedItems.filter(item => item.id !== checkItem.id))
      // }
    }
  };

  //function that handles the selecton of  "ALL"  items items on the table using checkbox
  const handleCombinedCheck = e => {
    if (e.target.checked) {
      window.$('input:checkbox').prop('checked', true);
      // window.document.querySelectorAll('[type="checkbox"]').values = true
      SetSelectedItems(tableData);
      // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
      // if (getAllSelectedItems) {
      //   getAllSelectedItems(RequestRes.data)
      // }
    } else {
      // window.document.querySelectorAll("[type='checkbox']").checked = true;
      window.$('input:checkbox').prop('checked', false);
      SetSelectedItems([]);
      // checksif there is getAllSelectedItems props,  it then returns the array of selectedItems
      // if (getAllSelectedItems) {
      //   getAllSelectedItems([])
      // }
    }
  };
  const handleCell = (cell, accessor) => {
    const Cell = cell;

    return <Cell>{accessor}</Cell>;
  };

  return (
    <>
      {!hide ? (
        <>
          <div className="row">
            <div className="col-xl-12" style={{ padding: '0px' }}>
              <div
                className="card"
                style={{ padding: '0px', padding: '20px 0px' }}
              >
                <div className="card-header pb-0 mg-b-5"></div>
                <LoadingOverlay spinner active={isloading}>
                  <div className="card-body" style={{ minHeight: 200 }}>
                    {tableData?.length && (
                      <>
                        <div className="table-responsive">
                          <table className="table table-hover table-striped mb-0 text-md-nowrap ">
                            <thead
                              style={{ height: '70px', paddingBottom: '30px' }}
                            >
                              <tr>
                                {addcheckbox && (
                                  <th style={{ paddingLeft: '20px' }}>
                                    <input
                                      type="checkbox"
                                      id="combinedCheck"
                                      onChange={handleCombinedCheck}
                                    />
                                  </th>
                                )}
                                {decorator.map((item, i) => (
                                  <th key={i} style={{ textAlign: '' }}>
                                    <span>{item.label}</span>
                                  </th>
                                ))}
                                {/* {actions && <th className="text-danger"><i><b>Actions</b></i></th>} */}
                              </tr>
                            </thead>
                            <tbody>
                              {tableData?.map((res, i) => {
                                return (
                                  <tr key={i} style={{ height: '40px' }}>
                                    {addcheckbox && (
                                      <td style={{ paddingLeft: '20px' }}>
                                        <input
                                          type="checkbox"
                                          onClick={e => handleCheck(e, res)}
                                        />
                                      </td>
                                    )}
                                    {decorator.map((item, i) => (
                                      <td key={i}>
                                        {item.Cell
                                          ? item.Cell(
                                              formatIfDateObject(
                                                findprop(res, item.accessor),
                                              ),
                                            )
                                          : formatIfDateObject(
                                              findprop(res, item.accessor),
                                            )}
                                      </td>
                                    ))}

                                    {/* {actions &&
                                    <td>
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
                                    </td>
                                  } */}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}
                  </div>
                </LoadingOverlay>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 dflex jcs" style={{ padding: 0 }}>
              {bulkAction && <BulkActions />}
            </div>
            <div className="col-6 dflex jce" style={{ padding: 0 }}>
              <div className=" mt-3">
                {pagination && (
                  <ReactPaginate
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'prevclassname'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'prevclassname'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'activelink'}
                    initialPage={1}
                    pageCount={5}
                    pageRangeDisplayed={3}
                    onPageChange={null}
                    previousLabel={'<'}
                    nextLabel={'>'}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default NewTable;
