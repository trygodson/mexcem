import { useRef } from 'react';
import { ChevronRight, Send } from 'react-bootstrap-icons';
import { Editor } from '@tinymce/tinymce-react';
import Card from '../../../shared/components/card/card';
import CustomText from '../../../shared/components/customtext/customtext';
import Height from '../../../shared/components/height/height';
import Input from '../../../shared/components/input/input';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';

import './support.scss';

const CustomerSupportCreateConversation = () => {
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
            support / Using Auxcar <b>/ How to contact my driver</b>
          </span>
        }
      ></PageTitle>
      <Height val={30} />

      <div className="row">
        <div className="col-lg-4">
          <Card>
            <div className="recent-assist">
              <h4>Recent Assist</h4>
              <div className="recent-assist-detail-wrapper">
                <div className="detail">
                  <h5>Tire change</h5>
                  <span>12/12/2021 18:00PM</span>
                </div>
                <span className="sucessful">successfull</span>
              </div>
              <div className="recent-assist-detail-wrapper">
                <div className="detail">
                  <h5>Tire change</h5>
                  <span>12/12/2021 18:00PM</span>
                </div>
                <span className="sucessful">successfull</span>
              </div>
              <div className="recent-assist-detail-wrapper">
                <div className="detail">
                  <h5>Tire change</h5>
                  <span>12/12/2021 18:00PM</span>
                </div>
                <span className="sucessful">successfull</span>
              </div>
              <h4 className="other">Other Topic</h4>
              <div className="other-topic-wrapper">
                <span className="topic-title">using Auxcar</span>
                <ChevronRight size={12} />
              </div>
              <div className="other-topic-wrapper">
                <span className="topic-title">Account and Data</span>
                <ChevronRight size={12} />
              </div>
              <div className="other-topic-wrapper">
                <span className="topic-title">Payment and pricing</span>
                <ChevronRight size={12} />
              </div>
              <div className="other-topic-wrapper">
                <span className="topic-title">App and features</span>
                <ChevronRight size={12} />
              </div>
              <div className="other-topic-wrapper">
                <span className="topic-title">Payment Options</span>
                <ChevronRight size={12} />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-lg-8">
          <Card className="support-rhs">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <Input
                  type="text"
                  label={true}
                  labelname="Title"
                  placeholder="Enter your amount"
                  style={{
                    width: '100%',
                    paddingLeft: '20px',
                    borderColor: 'grey',
                    marginTop: '10px',
                  }}
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <CustomText
                  type="label"
                  size={14}
                  style={{ fontWeight: '500' }}
                >
                  Topic
                </CustomText>
                <Height val={10} />
                <select name="payment_type">
                  <option value="" disabled selected>
                    payment
                  </option>
                  <option>Paypal</option>
                  <option>Cashapp</option>
                </select>
              </div>

              <div className="col-lg-6 col-sm-12" style={{ marginTop: '20px' }}>
                <CustomText
                  type="label"
                  size={14}
                  style={{ fontWeight: '500' }}
                >
                  User
                </CustomText>
                <Height val={10} />
                <select name="payment_type">
                  <option value="" disabled selected>
                    support
                  </option>
                  <option>Paypal</option>
                  <option>Cashapp</option>
                </select>
              </div>
            </div>
            <Height val={30} />
            <div style={{ height: 'max-content' }}>
              <div className="row">
                <div className="col-12">
                  <Editor
                    apiKey="your-api-key"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      height: 350,
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
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="profile-submit-button"
                  style={{
                    width: '200px',
                    fontWeight: 'bold',
                    fontSize: '24',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Send size={20} color="white" /> SEND
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default CustomerSupportCreateConversation;
