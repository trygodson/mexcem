import { ChevronRight } from "react-bootstrap-icons";
import Card from "../../../shared/components/card/card";
import Height from "../../../shared/components/height/height";
import PageTitle from "../../../shared/components/pagetitle/pagetitle";

import './support.scss';


const CustomerSupport = () => {
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

            <div className="top-holder">
              <h4>Using Auxcar</h4>
            </div>

            <div className="sub-topic-wrapper">
              <span className="topic-title">How to contact my driver</span>
              <ChevronRight size={12} />
            </div>
            <div className="sub-topic-wrapper">
              <span className="topic-title">Estimated time of arrival</span>
              <ChevronRight size={12} />
            </div>
            <div className="sub-topic-wrapper">
              <span className="topic-title">My driver was rude</span>
              <ChevronRight size={12} />
            </div>
            <div className="sub-topic-wrapper">
              <span className="topic-title">How to leave a rating</span>
              <ChevronRight size={12} />
            </div>
            <div className="sub-topic-wrapper">
              <span className="topic-title">I felt unsafe using Auxcar</span>
              <ChevronRight size={12} />
            </div>
            <div className="sub-topic-wrapper">
              <span className="topic-title">My Auxcar was Crashed</span>
              <ChevronRight size={12} />
            </div>


          </Card>





        </div>
      </div>
    </main>
  );
}

export default CustomerSupport;