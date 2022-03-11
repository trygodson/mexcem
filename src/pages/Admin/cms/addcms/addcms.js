import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../../../shared/components/pagetitle/pagetitle';
import Button from '../../../../shared/components/button/button';
import {
  Archive,
  Trash,
  Search,
  Pencil,
  XCircle,
  PersonPlus,
  Plus,
} from 'react-bootstrap-icons';
import { vendors } from '../../../../shared/hooks/api/testService.js';
import RippleTable from '../../../../shared/components/tables/table/TableCard';
import CustomText from '../../../../shared/components/customtext/customtext';
import { rootApp } from '../../../../routes';
import { colorScheme } from '../../../../default';
import Card from '../../../../shared/components/card/card';
import CustomSwitch from '../../../../shared/components/customswitch/customswitch';
import Ratings from '../../../../shared/components/ratings/ratings';
import Input from '../../../../shared/components/input/input';
import Height from '../../../../shared/components/height/height';
import { Editor } from '@tinymce/tinymce-react';

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

function AddCMS() {
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
            <b>CMS</b>
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

          {/* <input placeholder="Search" className="search" style={{ width: '180px' }} /> */}
          <div
            className=" primary_span_text"
            style={{ padding: '8px 20px', fontSize: 12, fontWeight: 'bold' }}
            onClick={() => {}}
          >
            View all
          </div>
        </>
      </PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3
              className="hoverPointer"
              onClick={() => setTable('all_vehicles')}
            >
              Add new CMS
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
                <div className="form-group">
                  <h4>CMS Type</h4>
                  <select className="form-input">
                    <option>Content</option>
                  </select>
                </div>

                <div className="form-group">
                  <h4>Content</h4>
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
                  <div className="col-sm-12 col-lg-3" style={customColStyle}>
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      Cancel
                    </Button>
                  </div>
                  <div className="col-sm-12 col-lg-3" style={customColStyle}>
                    <Button className="btn-block center-container-btn btn-success">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default AddCMS;
