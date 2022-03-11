import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import { Trash } from 'react-bootstrap-icons';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Input from '../../../../shared/components/input/input';
import Height from '../../../../shared/components/height/height';
import { Editor } from '@tinymce/tinymce-react';
import CustomReactSelect from '../../../../shared/components/customreactselect/customreactselect';

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

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const userOptions = [
  { value: '1', label: 'Michael' },
  { value: '2', label: 'John' },
  { value: '3', label: 'Steven' },
];

function CreateMessage() {
  const modalRef = useRef();

  const editorRef = useRef(null);
  const log = () => {
    // to get current value of text editor
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const [table, setTable] = useState('all_vendors');

  return (
    // figure out a better way to do this
    <main>
      <PageTitle
        title={
          <span>
            Message / <b>Create</b>
          </span>
        }
      >
        <>
          {/* <select className="select-first" style={{ width: '220px', marginRight: '10px' }}>
            <option value="active">-Status: Active-</option>
            <option value="processing">-Status: Active-</option>
            <option value="disabled">-Status: Disabled-</option>
          </select> */}

          {/* <select className="select-first" style={{ width: '220px' }}>
            <option value="active">Filter by driver</option>
          </select> */}

          {/* <input placeholder="Search" className="search" style={{ width: '180px' }} />
          <Button className="search-btn" onClick={() => {}}>
            <Search size={15} style={iconStyle} />
          </Button> */}

          <Button
            className="dashboard-title-btn warning-dashboard-title-btn rightSpace dflex jcc alc"
            onClick={() => {}}
          >
            <Trash size={12.5} />
            Draft
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
              Create message
            </h3>
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
          <div style={{ padding: '20px' }}>
            <div className="row">
              <div className="col-8">
                <div className="form-group">
                  <h4>Title</h4>
                  <Input
                    className="modal-x-input"
                    placeholder="Message title for drivers"
                  />
                </div>
                <div className="row">
                  <div className="col-4 paddingRight">
                    <div className="form-group">
                      <h4>Country</h4>
                      <select>
                        <option>United States</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 paddingRight">
                    <div className="form-group ">
                      <h4>State</h4>
                      <select>
                        <option>Arizona</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 paddingRight">
                    <div className="form-group ">
                      <h4>Region</h4>
                      <select>
                        <option>Phoenix</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 paddingNone">
                    <h4>Users</h4>
                    <CustomReactSelect
                      name="city"
                      options={userOptions}
                      placeholder="users"
                      isMulti={true}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6">
                    <b>All Driver</b> <CustomSwitch defaultChecked={false} />
                    <p>Send message to all drivers</p>
                  </div>
                  <div className="col-6">
                    <b>All Driver</b> <CustomSwitch defaultChecked={false} />
                    <p>Send message to all drivers</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12 ">
                {/* <textarea className="modal-x-textarea"></textarea> */}
                <Editor
                  apiKey="your-api-key"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 211,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                      'undo redo | formatselect | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style:
                      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  }}
                />
              </div>
            </div>
            <Height val={15} />
            <div className="row">
              <div
                className="col-sm-12 col-lg-3 offset-lg-9"
                style={customColStyle}
              >
                <Button className="btn-block center-container-btn btn-success">
                  Send
                </Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
              {/* <div className="col-sm-12 col-lg-3" style={customColStyle}>
                <Button className="btn-block center-container-btn danger-outline-btn">
                  Cancel
                </Button>
              </div> */}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default CreateMessage;
