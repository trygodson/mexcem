import { Image } from 'react-bootstrap-icons';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
import CustomText from '../../../shared/components/customtext/customtext';
import Height from '../../../shared/components/height/height';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import TabCard from '../../../shared/components/smallcards/usercard/tabcard/tabcard';
import './doc.scss';

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

const DriverDocuments = () => {
  let isDriverPhoto = false;
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Documents</b>
          </span>
        }
      ></PageTitle>

      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple dflex jcb">
            <h3 className="hoverPointer">All Document</h3>
          </div>
          <hr style={customHrStyle} />
        </Card>
        <Card>
          <div className="row">
            <div className="col-4">
              <h3 style={{ fontWeight: 'normal' }}>Personal documents</h3>

              <Height val={20} />
              <div className="row">
                <TabCard title="Driver photo" />
              </div>

              <Height val={15} />

              <div className="row">
                <TabCard title="Driver's license" />
              </div>

              <Height val={15} />

              <div className="row">
                <TabCard title="Social Security Number" />
              </div>
              <Height val={25} />

              <h3 style={{ fontWeight: 'normal' }}>Vehicle documents</h3>

              <Height val={20} />
              <div className="row">
                <TabCard title="Driver photo" />
              </div>

              <Height val={15} />

              <div className="row">
                <TabCard title="Driver's license" />
              </div>

              <Height val={15} />

              <div className="row">
                <TabCard title="Social Security Number" />
              </div>
            </div>

            <div className="col-8">
              <h3 style={{ fontWeight: 'normal' }}>Driver's Photo</h3>
              <Height val={20} />
              {isDriverPhoto ? (
                <div
                  style={{
                    border: `1px solid ${colorScheme.darkGray2}`,
                    height: '300px',
                    borderRadius: '5px',
                    padding: '20px',
                  }}
                >
                  <div className="row">
                    <div className="col-6">
                      {/* <div className="media" style={{ border: '1px solid', height: '100%' }}></div> */}
                    </div>
                    <div className="col-6">
                      <div
                        className="media"
                        // style={{ position: 'relative', border: '1px solid', height: '250px' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grayBg" style={{ padding: '40px' }}>
                  <h3 style={{ fontWeight: '400', fontSize: '16px' }}>
                    File upload
                  </h3>
                  <Height val={10} />
                  <div className="uploader">
                    <div className="form-group dflex jcc alc">
                      <div
                        className="upload-space"
                        style={{
                          position: 'relative',
                          cursor: 'pointer',
                          border: '1px solid #ccc',
                          backgroundColor: 'white',
                          width: '100%',
                        }}
                      >
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
                  <div className="dflex">
                    <Image size={50} color={colorScheme.border2} />
                    <div className="w100" style={{ marginLeft: '15px' }}>
                      <CustomText type="span" size={12}>
                        Image123_d.jpg
                      </CustomText>
                      <div
                        style={{
                          width: '100%',
                          height: '5px',
                          backgroundColor: 'grey',
                        }}
                      ></div>
                      <CustomText type="span" size={12}>
                        5.7mb
                      </CustomText>
                    </div>
                  </div>
                  <div className="w100">
                    <button className="profile-submit-button">Done</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default DriverDocuments;
