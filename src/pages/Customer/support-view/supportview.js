import { ChevronRight } from "react-bootstrap-icons";
import Button from "../../../shared/components/button/button";
import Card from "../../../shared/components/card/card";
import CustomText from "../../../shared/components/customtext/customtext";
import Height from "../../../shared/components/height/height";
import PageTitle from "../../../shared/components/pagetitle/pagetitle";


const ctaStyle = {
  width: '70%',
  margin: '20px auto',
  textAlign: 'center'
}

const SupportView = () => {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Support</b>
          </span>
        }
      >
      </PageTitle>
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
                <span className="sucessful" >successfull</span>
              </div>
              <div className="recent-assist-detail-wrapper">
                <div className="detail">
                  <h5>Tire change</h5>
                  <span>12/12/2021 18:00PM</span>
                </div>
                <span className="sucessful" >successfull</span>
              </div>
              <div className="recent-assist-detail-wrapper">
                <div className="detail">
                  <h5>Tire change</h5>
                  <span>12/12/2021 18:00PM</span>
                </div>
                <span className="sucessful" >successfull</span>
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
          <button className="profile-submit-button">Start a conversation</button>
        </div>
        <div className="col-lg-8">

          <Card className="support-rhs">

            <div className="top-holder" style={{ marginBottom: '10px' }}>
              <h5>How to contact my driver</h5>
            </div>

            <div className="sub-topic-wrapper" style={{ margin: '10px 0' }}>
              <CustomText type="p" size={13} style={{ fontWeight: '400' }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here
              </CustomText>
            </div>

            <div className="sub-topic-wrapper" style={{ margin: '10px 0' }}>
              <CustomText type="p" size={13} style={{ fontWeight: '400' }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here
              </CustomText>
            </div>

            <div className="sub-topic-wrapper" style={{ margin: '10px 0' }}>
              <CustomText type="p" size={13} style={{ fontWeight: '400' }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here
              </CustomText>
            </div>

            <div style={ctaStyle}>
              <h5  >Does this information solve your issue?</h5>
              <div style={ctaStyle}>

                <div className="row">
                  <div className="col-6">
                    <Button className="btn-block center-container-btn success-outline-btn">Yes</Button>
                  </div>
                  <div className="col-6">
                    <Button className="btn-block center-container-btn danger-outline-btn">
                      No
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </Card>





        </div>
      </div>
    </main>
  );
}

export default SupportView;