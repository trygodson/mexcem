import React from 'react';
import Image1 from '../../../../assets/img/Images.jpg';
import Image2 from '../../../../assets/img/driver background.jpg';
import Logo from '../../../../shared/components/logo/logo';
import Height from '../../../../shared/components/height/height';
import { ArrowLeft } from 'react-bootstrap-icons';
import CustomReactSelect from '../../../../shared/components/customreactselect/customreactselect';
import './vehicledetail.scss';
import { useHistory } from 'react-router-dom';
const userOptions = [
  { value: '1', label: 'Michael' },
  { value: '2', label: 'John' },
  { value: '3', label: 'Steven' },
];

function DriverVehicleDetail() {
  const { push } = useHistory();

  return (
    <div className="row">
      <div className="col-6 login-left">
        <div className="logo-div _border">
          <Logo className="" />
        </div>
        <div className="image-cluster _border">
          <img src={Image1} className="image-1" />
          <img src={Image2} className="image-2" />
          <h2>Help Is On</h2>
          <h2>The Way.</h2>
          <p>Over 116,543+ Satisfied Customers.</p>
        </div>
      </div>
      <div className="col-6 login-right dflex jcc alc">
        <div
          className="bg-form dflex jcc alc flex-columm"
          style={{ width: '500px' }}
        >
          <div className="inner">
            <ArrowLeft size={22} className="left-icon" />
            <h3>Vehicle detail</h3>
            <Height val={5} />
            <div>
              <p className="field-label-title">vehicle manufacturer</p>

              <CustomReactSelect
                name="city"
                options={userOptions}
                placeholder="Tire"
                isMulti={false}
                className=""
              />
              <span style={{ fontSize: '12px' }}>
                if you dont find your manufaturer from the list, let us know at
                support@auxcar.com
              </span>
            </div>
            <Height val={5} />
            <div className="row jcb">
              <div className="col-6 ">
                <p className="field-label-title">vehicle year</p>

                <CustomReactSelect
                  name="city"
                  options={userOptions}
                  placeholder="2012"
                  isMulti={false}
                  className=""
                />
              </div>
              <div className="col-5">
                <p className="field-label-title">vehicle color</p>

                <CustomReactSelect
                  name="city"
                  options={userOptions}
                  placeholder="blue"
                  isMulti={false}
                  className=""
                />
              </div>
            </div>
            <Height val={10} />
            <div className="row">
              <div className="col-6 paddingNone">
                <p className="field-label-title">License plate</p>

                <input
                  className="customer-input mtop-1"
                  placeholder=""
                  style={{ backgroundColor: 'white', paddingLeft: '10px' }}
                />
              </div>
            </div>
            <Height val={12} />
            <div className="form-info">
              <p style={{ fontSize: '12px' }}>
                Please enter your registeration card issued by the state of
                Arizona
              </p>
            </div>
            <div className="dflex alc">
              <input type="checkbox" />
              <p style={{ fontSize: '12px', marginLeft: '10px' }}>
                I have a vehicle to drive to assist
              </p>
            </div>
            <Height val={12} />
            <button onClick={() => push('/driver_verification')}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverVehicleDetail;
