import React, { useRef } from 'react';
import Card from '../../../../../shared/components/card/card';
import CustomText from '../../../../../shared/components/customtext/customtext';
import Height from '../../../../../shared/components/height/height';
import Input from '../../../../../shared/components/input/input';
import PageTitle from '../../../../../shared/components/pagetitle/pagetitle';
import { colorScheme } from '../../../../../default';
import { Image } from 'react-bootstrap-icons';
import Button from '../../../../../shared/components/button/button';
import { Editor } from '@tinymce/tinymce-react';
import './toolbox.scss';
import CustomReactSelect from '../../../../../shared/components/customreactselect/customreactselect';

const customColStyle = {
  paddingLeft: '9.5px',
  paddingRight: '9.5Spx',
};

const customHrStyle = {
  background: colorScheme.border2,
};
const userOptions = [
  { value: '1', label: 'Michael' },
  { value: '2', label: 'John' },
  { value: '3', label: 'Steven' },
];

function AddTool() {
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
            <b>Toolbox</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone">
          <div className="card-padded-title">
            <h3>Add new</h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '150px',
              marginLeft: '11px',
            }}
          />
          <hr style={customHrStyle} />
          <div className="card-content">
            <div className="row">
              <div className="col-sm-12 col-lg-8">
                <div className="form-group">
                  <h4>Assist category</h4>
                  <CustomReactSelect
                    name="city"
                    options={userOptions}
                    placeholder="Tire"
                    isMulti={true}
                    className=""
                  />
                </div>
                <div className="form-group">
                  <h4>Status</h4>
                  <select>
                    <option>Select status</option>
                  </select>
                </div>
                <div className="form-group">
                  <h4>Title</h4>
                  <Input className="modal-x-input" placeholder="Wrench" />
                </div>
                <div className="form-group">
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
                <div className="row">
                  <div
                    className="col-sm-12 col-lg-3 offset-lg-6"
                    style={customColStyle}
                  >
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
                  </div>
                  <div className="col-sm-12 col-lg-3 " style={customColStyle}>
                    <Button className="btn-block center-container-btn btn-success">
                      Create tool
                    </Button>
                    <Height val={13} className="show-on-med-and-down" />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4 uploader">
                <div className="form-group">
                  <CustomText type="h4" size={14}>
                    Upload icon
                  </CustomText>
                  <div className="upload-space">
                    <div className="upload-space-text">
                      <input
                        type="file"
                        id="file"
                        accept="image/*, image/heic, image/heif"
                      />

                      <Image size={50} color={colorScheme.border2} />
                      <h4>Click here to upload your image</h4>
                      <p>Supports: JPG, PNG, JPEG200</p>
                    </div>
                  </div>
                </div>
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

export default AddTool;
