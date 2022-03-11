import { Tools } from 'react-bootstrap-icons';
import ReactPaginate from 'react-paginate';
import { colorScheme } from '../../../default';
import Card from '../../../shared/components/card/card';
import CustomSwitch from '../../../shared/components/customswitch/customswitch';
import PageTitle from '../../../shared/components/pagetitle/pagetitle';
import './drivertoolbox.scss';
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

const DriverToolBox = () => {
  return (
    <main>
      <PageTitle
        title={
          <span>
            <b>Tools</b>
          </span>
        }
      ></PageTitle>
      <section>
        <Card className="paddingNone" style={customCardStyle}>
          <div className="card-padded-title multiple">
            <h3 className="hoverPointer">All tools</h3>
          </div>
          <hr
            style={{
              background: colorScheme.gray,
              width: '117px',
              marginLeft: `5px`,
              height: '2.2px',
            }}
          />
          <hr style={customHrStyle} />
        </Card>
        <Card>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="tool-container dflex flex-columm jcc alc">
                <div className="toolbox-image-wrapper">
                  <Tools size={25} />
                </div>
                <span className="tool-name">wrench</span>
                <div className="dflex jcc alc">
                  <div className="name primary_span_text">Tire</div>
                  <div className="name primary_span_text">Battery</div>
                </div>
              </div>
              <div className="dflex jcc alc">
                <CustomSwitch defaultChecked={false} />
              </div>
            </div>
          </div>
        </Card>
        <div className="dflex jce mtop-2">
          <div>
            <ReactPaginate
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              containerClassName={'pagination'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'prevclassname'}
              previousLinkClassName={'page-link'}
              nextClassName={'prevclassname'}
              nextLinkClassName={'page-link'}
              activeClassName={'activelink'}
              initialPage={1}
              pageCount={5}
              pageRangeDisplayed={3}
              onPageChange={null}
              previousLabel={'<'}
              nextLabel={'>'}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DriverToolBox;
