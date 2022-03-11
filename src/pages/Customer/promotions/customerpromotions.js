import {
  CheckCircle,
  ChevronRight,
  InfoCircle,
  Megaphone,
} from 'react-bootstrap-icons';
import Card from '../../../shared/components/card/card';
import Height from '../../../shared/components/height/height';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import './customerpromotions.scss';
import { promotionsdata } from './data';

const CustomerPromotions = () => {
  return (
    <main>
      <PageTitle title={<h2 className="left">Vehicle</h2>}>
        <></>
      </PageTitle>
      <Height val={8} />
      <div className="row">
        <div className="col-4">
          <Card>
            <Height val={10} />
            <div
              className="row bottom"
              style={{ paddingTop: '15px', paddingBottom: '15px' }}
            >
              <div className="text-holder">
                <p className="code">Get Free Service</p>
              </div>
              <ChevronRight size={16} />
            </div>
            <Height val={10} />
            <div
              className="row bottom"
              style={{ paddingTop: '15px', paddingBottom: '15px' }}
            >
              <div className="text-holder">
                {/* <h5 className="car-name">Mecedez Benz</h5> */}
                <p className="code">Enter promo code</p>
              </div>
              <ChevronRight size={16} />
            </div>
          </Card>
        </div>
      </div>
      <div>
        <section className="wrapper">
          <div className="card-padded-title multiple">
            <h4 className="hoverPointer">All Promtions</h4>
          </div>
          <hr />
          <div className="row content">
            {promotionsdata.map((item, i) => (
              <div className="col-lg-4 item" key={i}>
                <div
                  className="card-wrapper"
                  style={{
                    backgroundColor: `${
                      item.color === 'blue'
                        ? '#2DB2FF'
                        : item.color === 'green'
                        ? '#1AD598'
                        : '#6C63FF'
                    }`,
                  }}
                >
                  <div className="row justify-content-between top my-2">
                    <Megaphone size={22} />
                    <div className="middle-content">
                      <p>{item.title}</p>
                      <span>{item.tandc}</span>
                    </div>
                    <InfoCircle size={14} />
                  </div>
                  <Height val={20} />
                  <div className="bottomm my-2">
                    <div className="row in">
                      <div className="applied">
                        <CheckCircle size={16} />
                        <span>Applied</span>
                      </div>
                      <span>5 hours left</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CustomerPromotions;
