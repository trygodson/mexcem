import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import Button from '../../../shared/components/button/button';
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
} from '../../../shared/hooks/api/testService.js';
import RippleTable from '../../../shared/components/tables/table/TableCard';
import CustomText from '../../../shared/components/customtext/customtext';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
import './vehicles.scss';
import CustomSwitch from '../../../shared/components/customswitch/customswitch';
import Modal from '../../../shared/components/modals';
import Height from '../../../shared/components/height/height';
import { Input } from 'reactstrap';
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

function Vehicles({ ...props }) {
  const modalRef = useRef();

  const [table, setTable] = useState('all_vehicles'); // brand // model // color // tire_size
  const [loading, setLoading] = useState(true);
  const [vehicletabledata, setVehicleTableData] = useState([]);
  const [brandtabledata, setBrandTableData] = useState([]);
  const [modeltabledata, setModelTableData] = useState([]);
  const [colortabledata, setColorTableData] = useState([]);
  const [tiretabledata, setTireTableData] = useState([]);

  const [hideVehiclesTable, setHideVechiclesTable] = useState(false);
  const [hideBrandTable, setHideBrandTable] = useState(true);
  const [hideModelTable, setHideModelTable] = useState(true);
  const [hideColorTable, setHideColorTable] = useState(true);
  const [hideTireSizeTable, setHideTireSizeTable] = useState(true);

  const [openAddNewColor, setOpenAddNewColor] = useState(false);
  const [openAddNewWheelDiameterModal, setOpenAddNewWheelDiameterModal] =
    useState(false);
  const [openBrandModal, setOpenBrandModal] = useState(false);

  const defaultHrMarginLeft = 8;
  const [hrMarginLeft, setHrMarginLeft] = useState(defaultHrMarginLeft);

  const handleNewModel = () => {
    if (table == 'tire_size') {
      setOpenAddNewWheelDiameterModal(true);
    } else if (table == 'color') {
      setOpenAddNewColor(true);
    } else if (table == 'model') {
      props.history.push('/app/vehicles/model/new');
    } else if (table == 'brand') {
      setOpenBrandModal(true);
    }
  };

  useEffect(() => {
    if (table === 'all_vehicles') {
      setHideVechiclesTable(false);
      setHideBrandTable(true);
      setHideModelTable(true);
      setHideColorTable(true);
      setHideTireSizeTable(true);
      setHrMarginLeft(defaultHrMarginLeft);
    } else if (table === 'brand') {
      setHideVechiclesTable(true);
      setHideBrandTable(false);
      setHideModelTable(true);
      setHideColorTable(true);
      setHideTireSizeTable(true);
      setHrMarginLeft(155);
    } else if (table === 'model') {
      setHideVechiclesTable(true);
      setHideBrandTable(true);
      setHideModelTable(false);
      setHideColorTable(true);
      setHideTireSizeTable(true);
      setHrMarginLeft(275);
    } else if (table === 'color') {
      setHideVechiclesTable(true);
      setHideBrandTable(true);
      setHideModelTable(true);
      setHideColorTable(false);
      setHideTireSizeTable(true);
      setHrMarginLeft(397);
    } else {
      // tire_size
      setHideVechiclesTable(true);
      setHideBrandTable(true);
      setHideModelTable(true);
      setHideColorTable(true);
      setHideTireSizeTable(false);
      setHrMarginLeft(510);
    }
  }, [table]);

  useEffect(async () => {
    const vehicle = await vehiclesVehicles();
    const brand = await vehiclesBrand();
    const model = await vehiclesModel();
    const color = await vehiclesColor();
    const tiresize = await vehiclesTireSize();
    setVehicleTableData(vehicle.data);
    setBrandTableData(brand.data);
    setModelTableData(model.data);
    setColorTableData(color.data);
    setTireTableData(tiresize.data);
    setLoading(false);
  }, [vehicletabledata, brandtabledata]);

  // all vehicles
  const vehiclesDecorator = [
    {
      label: 'Plate number',
      accessor: 'vehicle_data',
      Cell: props => (
        <span>
          {props.plate_number}
          <br />
          Color: {props.color}
        </span>
      ),
    },
    {
      label: 'Brand',
      accessor: 'brand',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Model',
      accessor: 'model',
      Cell: props => <>{props}</>,
    },
    {
      label: 'User',
      accessor: 'user',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => (
        <>
          <CustomSwitch defaultChecked={props} />
        </>
      ),
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

  const vehiclesTable = (
    <NewTable
      decorator={vehiclesDecorator}
      tableData={vehicletabledata}
      isloading={loading}
      hide={hideVehiclesTable}
      bulkAction={true}
    />
  );

  // brand
  const brandDecorator = [
    {
      label: 'Name',
      accessor: 'name',
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

  const brandTable = (
    <NewTable
      decorator={brandDecorator}
      tableData={brandtabledata}
      isloading={loading}
      hide={hideBrandTable}
      bulkAction={true}
    />
  );

  // model
  const modelDecorator = [
    {
      label: '#',
      accessor: 'hash',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Brand',
      accessor: 'brand',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Name',
      accessor: 'name',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Year',
      accessor: 'year',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Type',
      accessor: 'type',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Photo',
      accessor: 'photo',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      // mui
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

  const modelTable = (
    <NewTable
      decorator={modelDecorator}
      tableData={modeltabledata}
      isloading={loading}
      hide={hideModelTable}
      bulkAction={true}
    />
  );

  // color
  const colorDecorator = [
    {
      label: '#',
      accessor: 'hash',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Name',
      accessor: 'name',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Code',
      accessor: 'code',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      // mui switch
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

  const colorTable = (
    <NewTable
      decorator={colorDecorator}
      tableData={colortabledata}
      isloading={loading}
      hide={hideColorTable}
      bulkAction={true}
    />
  );

  // tire_size
  const tireSizeDecorator = [
    {
      label: '#',
      accessor: 'hash',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Wheel diameter',
      accessor: 'wheel_diameter',
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

  const tireSizeTable = (
    <NewTable
      decorator={tireSizeDecorator}
      tableData={tiretabledata}
      isloading={loading}
      hide={hideTireSizeTable}
      bulkAction={true}
    />
  );

  const renderTable = () => {
    return (
      <>
        {vehiclesTable}
        {brandTable}
        {modelTable}
        {colorTable}
        {tireSizeTable}
      </>
    );
  };

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            <b>Vehicles</b>
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

          <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select>

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
            onClick={handleNewModel}
          >
            <Plus size={12.5} />
            New Vehicle
          </Button>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3
              className="hoverPointer"
              onClick={() => setTable('all_vehicles')}
            >
              All vehicles
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('brand')}>
              Brand
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('model')}>
              Model
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('color')}>
              Color
            </h3>
            <h3 className="hoverPointer" onClick={() => setTable('tire_size')}>
              Tire size
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
        {openAddNewWheelDiameterModal && (
          <Modal
            customModalBodyClass="paddingNone"
            width={680}
            closeModal={() => setOpenAddNewWheelDiameterModal(false)}
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
                <div className="col-6">
                  <div className="form-group">
                    <h4>Title</h4>
                    <Input className="modal-x-input" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <h4>Status</h4>
                    <Height val={8} />
                    <select name="User">
                      <option>Active</option>
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
                  <Button className="btn-block center-container-btn btn-success">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <Height val={18} />
          </Modal>
        )}
        {openAddNewColor && (
          <Modal
            customModalBodyClass="paddingNone"
            width={680}
            closeModal={() => setOpenAddNewColor(false)}
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                Add new color
              </CustomText>
              <Height val={20} />
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <h4>Name</h4>
                    <Input className="modal-x-input" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <h4>Code</h4>
                    <Height val={8} />
                    <select name="User">
                      <option>Active</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="form-group">
                    <select>
                      <option>Active</option>
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
                  <Button className="btn-block center-container-btn btn-success">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <Height val={18} />
          </Modal>
        )}
        {openBrandModal && (
          <Modal
            customModalBodyClass="paddingNone"
            width={680}
            closeModal={() => setOpenAddNewColor(false)}
          >
            <div className="modal-header">
              <CustomText type="h3" size={15}>
                Add new brand
              </CustomText>
              <Height val={20} />
            </div>
            <Height val={8} />
            <div className="modal-sub-body bootstrap-wrapper">
              <div className="row">
                <div className="col-8">
                  <div className="form-group">
                    <h4>Name</h4>
                    <Input className="modal-x-input" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="form-group">
                    <h4>Status</h4>
                    <Height val={8} />
                    <select name="User">
                      <option>Active</option>
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
                  <Button className="btn-block center-container-btn btn-success">
                    Submit
                  </Button>
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

export default Vehicles;
