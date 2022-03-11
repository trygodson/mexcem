import React, { useRef, useState, useEffect } from 'react';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import Card from '../../../../../shared/components/card/card';
import './permissions.scss';
import { ChevronDown } from 'react-bootstrap-icons';
import CustomSwitch from '../../../../../shared/components/customswitch/customswitch';

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

const customCardStyle2 = {
  background: colorScheme.grayBackground,
  color: colorScheme.black,
  paddingLeft: '28px',
  paddingRight: '28px',
};

function Permissions() {
  const modalRef = useRef();

  const [openOptions, setOpenOptions] = useState(false);

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Manage / Roles <b>/ Vendors</b>
          </span>
        }
      >
        <></>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer">Permissions</h3>
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

          <div className="permissions">
            <div className="permission">
              <Card style={customCardStyle2} onClick={() => setOpenOptions(!openOptions)}>
                <b>Users</b>
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
              {openOptions && (
                <div className="options">
                  <div>
                    View users
                    <span className="right">
                      <CustomSwitch defaultChecked={false} />
                    </span>
                  </div>
                  <div>
                    View users{' '}
                    <span className="right">
                      <CustomSwitch defaultChecked={false} />
                    </span>
                  </div>
                  <div>
                    View users{' '}
                    <span className="right">
                      <CustomSwitch defaultChecked={false} />
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b>Wallet</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b>Documents</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b>Vehicles</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b> Vendors</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b>Message</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b>Manage</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b> CMS</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b> Extra field</b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
            <div className="permission">
              <Card style={customCardStyle2}>
                <b> Notifications </b>{' '}
                <span className="right">
                  <ChevronDown size={18} />
                </span>
              </Card>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default Permissions;
