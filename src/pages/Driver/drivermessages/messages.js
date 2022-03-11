import Height from '../../../shared/components/height/height';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import ProfileImage from '../../../shared/components/profileimage/profileimage';
import Input from '../../../shared/components/input/input';
import CustomSwitch from '../../../shared/components/customswitch/customswitch';
import Card from '../../../shared/components/card/card';
import './messages.scss';

const DriverMessage = () => {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Messages</b>
          </span>
        }
      ></PageTitle>
      <Height val={10} />
      <div className="dflex jce  m-1">
        <div className="dflex alc">
          <input type="checkbox" className="mx-1" />
          <span style={{ fontSize: '12px' }} className="mx-1">
            Hide read notification
          </span>
          <div
            style={{ width: 23, height: 23, borderRadius: 5 }}
            className="success_span_text mx-1"
          ></div>
          <div
            style={{ width: 23, height: 23, borderRadius: 5 }}
            className="danger_span_text mx-1"
          ></div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          <Card className="message-filter-wrapper">
            <div className="message-filter-item">
              <div className="circle"></div>
              <span>All</span>
              <span>120</span>
            </div>
            <div className="message-filter-item ">
              <div className="circle success"></div>
              <span>Activities</span>
              <span>120</span>
            </div>
            <div className="message-filter-item">
              <div className="circle primary"></div>
              <span>System</span>
              <span>120</span>
            </div>
          </Card>
        </div>
        <div className="col-lg-9">
          <Card className="message-card-wrapper">
            <div className="message-item">
              <div className="checker">
                <div className="circle"></div>
                <input type="checkbox" />
              </div>
              <div className="msg">
                <h5>Earn more with more tools now</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC
                </p>
              </div>
              <div className="date">2021-09-02 09:45AM</div>
            </div>
            <div className="message-item">
              <div className="checker">
                <div className="circle"></div>
                <input type="checkbox" />
              </div>
              <div className="msg">
                <h5>Earn more with more tools now</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC
                </p>
              </div>
              <div className="date">2021-09-02 09:45AM</div>
            </div>
            <div className="message-item">
              <div className="checker">
                <div className="circle"></div>
                <input type="checkbox" />
              </div>
              <div className="msg">
                <h5>Earn more with more tools now</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC
                </p>
              </div>
              <div className="date">2021-09-02 09:45AM</div>
            </div>
            <div className="message-item">
              <div className="checker">
                <div className="circle"></div>
                <input type="checkbox" />
              </div>
              <div className="msg">
                <h5>Earn more with more tools now</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC
                </p>
              </div>
              <div className="date">2021-09-02 09:45AM</div>
            </div>
            <div className="message-item">
              <div className="checker">
                <div className="circle"></div>
                <input type="checkbox" />
              </div>
              <div className="msg">
                <h5>Earn more with more tools now</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC
                </p>
              </div>
              <div className="date">2021-09-02 09:45AM</div>
            </div>
            <div className="message-item">
              <div className="checker">
                <div className="circle"></div>
                <input type="checkbox" />
              </div>
              <div className="msg">
                <h5>Earn more with more tools now</h5>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC
                </p>
              </div>
              <div className="date">2021-09-02 09:45AM</div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default DriverMessage;
