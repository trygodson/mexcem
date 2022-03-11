import React, { useRef } from 'react';
import Card from '../../../../../shared/components/card/card';
import CustomText from '../../../../../shared/components/customtext/customtext';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { CurrencyDollar, Image, Plus, RecordCircleFill } from 'react-bootstrap-icons';
import Button from '../../../../../shared/components/button/button';
import CustomSwitch from '../../../../../shared/components/customswitch/customswitch';
import { Editor } from '@tinymce/tinymce-react';
import IconInput from '../../../../../shared/components/iconinput/iconinput';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customInputStyle = {
  border: `1px solid ${colorScheme.border2}`,
};

const customHrStyle = {
  background: colorScheme.border2,
};

const customBorderStyle = {
  padding: '20px',
  border: '1px solid ' + colorScheme.border2,
  borderRadius: '5px',
  height: '243px',
};

function CreateReward() {
  const editorRef = useRef(null);
  const log = () => {
    // to get current value of text editor
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <main>
      <PageTitle
        title={
          <span>
            Manage / Rewards / <b>Create</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Create new reward program</h3>
          </div>
          <hr style={{ background: colorScheme.gray, width: '150px', marginLeft: '11px' }} />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <h4>Title</h4>
                  <Input className="modal-x-input" placeholder="Enter reward title" />
                </div>

                <div className="row">
                  <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                    <div className="form-group">
                      <h4>Active from</h4>
                      <Input type="date" className="modal-x-input" />
                    </div>
                  </div>
                  <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                    <div className="form-group">
                      <h4>Active to</h4>
                      <Input type="date" className="modal-x-input" />
                    </div>
                  </div>
                </div>
                {/* <Height val={25} /> */}
              </div>

              <div className="col-sm-12 col-lg-6">
                <div className="form-group">
                  <h4>Target group</h4>
                  <div className="users_bub">
                    <input type="radio" /> <span>Customer</span>
                  </div>
                  <div className="users_bub">
                    <input type="radio" /> <span>Driver</span>
                  </div>
                  <div className="users_bub">
                    <input type="radio" /> <span>Tow company</span>
                  </div>
                  <div className="users_bub">
                    <input type="radio" /> <span>All</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 paddingRight">
                    <div className="form-group">
                      <h4>No of assist</h4>
                      <select>
                        <option>- Select number -</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 paddingRight">
                    <div className="form-group ">
                      <h4>Duration</h4>
                      <Input className="modal-x-input" style={{ marginTop: '0' }} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group">
                      <h4>Status</h4>
                      <p>
                        is Active <CustomSwitch defaulChecked={false} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <h4>Earning rules</h4>
                <Height val={10} />
                <div style={customBorderStyle}>
                  <div className="row">
                    <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                      <div className="form-group">
                        <h4>Action</h4>
                        <select>
                          <option>-- Select Action --</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6" style={{ padding: '0 0 0 15px' }}></div>
                  </div>

                  <div className="row">
                    <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                      <div className="form-group">
                        <h4>Earning style</h4>
                        <select>
                          <option>-- Select Earnings style --</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                      <div className="form-group">
                        <h4>X Points</h4>
                        <Input className="modal-x-input" style={{ marginTop: '0px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <h4>Spending rules</h4>
                <Height val={8} />
                <div style={customBorderStyle}>
                  <div className="row">
                    <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                      <div className="form-group">
                        <h4>Points</h4>
                        <Input className="modal-x-input" />
                      </div>
                    </div>
                    <div className="col-6" style={{ padding: '0 0 0 15px' }}>
                      <div className="form-group">
                        <h4>Cashback value</h4>
                        <IconInput
                          colored={true}
                          type="text"
                          placeholder=""
                          icon={CurrencyDollar}
                          iconSize={15.8}
                          customIconDivClass="popupIconDiv"
                          customInputClass="popupInput _length"
                          customIconClass="popupInputIcon"
                          customInputBorderClass="popupModalInputBorder"
                        />
                        {/* <Input className="modal-x-input" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6" style={{ padding: '0 15px 0 0' }}>
                      <div className="form-group">
                        <h4>Minimum redeem points</h4>
                        <Input className="modal-x-input" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Height val={20} />

            <div className="row">
              <div className="col-12">
                <Button className="modal-btn btn-primary" style={{ width: '100px' }}>
                  <Plus size={18} /> Add more{'  '}
                </Button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <h3>Terms & conditions</h3>
                  <Height val={8} />
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
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-3 offset-lg-6" style={customColStyle}>
                <Button className="btn-block center-container-btn danger-outline-btn">
                  Cancel
                </Button>
              </div>
              <div className="col-sm-12 col-lg-3 " style={customColStyle}>
                <Button className="btn-block center-container-btn btn-success">
                  Create reward
                </Button>
                <Height val={13} className="show-on-med-and-down" />
              </div>
            </div>
            <Height val={130} className="hide-on-med-and-down" />
            <Height val={20} className="show-on-med-and-down" />
            <Height val={16} />
          </div>
        </Card>
      </section>
    </main>
  );
}

export default CreateReward;
