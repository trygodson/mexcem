import React from 'react';
import Image1 from '../../../../assets/img/Images.jpg';
import Image2 from '../../../../assets/img/driver background.jpg';
import Logo from '../../../../shared/components/logo/logo';
import Height from '../../../../shared/components/height/height';
import { ArrowLeft } from 'react-bootstrap-icons';
import './driverdocument.scss';
import RegisterationUploadInput from '../../../../shared/components/reguploadinput/reguploadinput';

const userOptions = [
  { value: '1', label: 'Michael' },
  { value: '2', label: 'John' },
  { value: '3', label: 'Steven' },
];

function DriverDocumentation() {
  return (
    <div className="row">
      <div className="col-6 login-left" style={{ height: 'auto' }}>
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
      <div
        className="col-6 login-right dflex jcc alc"
        style={{ height: 'auto' }}
      >
        <div
          className="bg-form dflex jcc alc flex-columm"
          style={{ width: '500px' }}
        >
          <div className="inner">
            <ArrowLeft size={22} className="left-icon" />
            <h3>Documentation</h3>
            <Height val={5} />
            <div className="form-info">
              <p style={{ fontSize: '12px' }}>
                We are required legally to document all insurances before they
                can work with us. Scanned document and quality photos are
                required
              </p>
            </div>
            <Height val={10} />
            <h3>Profile Picture</h3>
            <Height val={5} />

            <div>
              <p className="field-label-title">Upload profile picture</p>

              <RegisterationUploadInput />
              <span style={{ fontSize: '12px' }}>
                Please provide a clear portrait picture of yourself, full face,
                front view with your eyes open. Dont upload a full body picture
              </span>
            </div>
            <Height val={10} />
            <h3>Drivers License</h3>

            <Height val={5} />
            <p className="field-label-title">Expires</p>
            <div className="row jcb">
              <div className="col-4 paddingNone">
                <input
                  className="customer-input mtop-1"
                  placeholder="Day"
                  style={{ backgroundColor: 'white', paddingLeft: '10px' }}
                />
              </div>
              <div className="col-4 ">
                <input
                  className="customer-input mtop-1"
                  placeholder="Month"
                  style={{ backgroundColor: 'white', paddingLeft: '10px' }}
                />
              </div>
              <div className="col-4 paddingNone">
                <input
                  className="customer-input mtop-1"
                  placeholder="Year"
                  style={{ backgroundColor: 'white', paddingLeft: '10px' }}
                />
              </div>
            </div>
            <Height val={15} />
            <div>
              <p className="field-label-title">Upload License Image</p>

              <RegisterationUploadInput />
            </div>

            <Height val={10} />
            <h3>Drivers License</h3>
            <Height val={8} />
            <div>
              <p className="field-label-title">Upload Your ADOT Card</p>

              <Height val={8} />
              <RegisterationUploadInput />
              <span style={{ fontSize: '12px' }}>
                Please upload your vehicle registeration card, issued by the
                state of Arizona
              </span>
            </div>

            <Height val={15} />
            <div className="dflex alc">
              <input type="checkbox" />
              <p
                style={{
                  fontSize: '12px',
                  marginLeft: '10px',
                  fontWeight: 'bold',
                }}
              >
                Legal Notice
              </p>
            </div>
            <Height val={12} />
            <div className="form-info">
              <p style={{ fontSize: '12px' }}>
                By signinig up you agree to out terms and conditions
              </p>
              <p style={{ fontSize: '12px' }}>
                By signing up, you certifying that you are 16 years of age or
                older
              </p>
              <p style={{ fontSize: '12px' }}>
                For more information on data privacy, see our privacy policy
              </p>
            </div>
            <Height val={12} />
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverDocumentation;
