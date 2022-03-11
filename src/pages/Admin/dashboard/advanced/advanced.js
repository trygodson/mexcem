import React from 'react';
import AdvancedCard from '../../../../shared/components/card/advancedcard/advancedcard';
import { colorScheme } from '../../../../default';
import { Cash } from 'react-bootstrap-icons';
import Card from '../../../../shared/components/card/card';
import './advanced.scss';
import CustomText from '../../../../shared/components/customtext/customtext';
import Height from '../../../../shared/components/height/height';
import AssistRequestStat from '../../../../shared/components/assistrequeststat/assistrequeststat';
import PieChartDraw from '../../../../shared/components/piechartdraw/piechartdraw';
import PullUp from '../../../../shared/components/pullup/pullup';
import LineChartDraw from '../../../../shared/components/linechartdraw/linechartdraw';

const customHrStyle = {
  backgroundColor: colorScheme.grayBackground,
};

function Advanced() {
  return (
    <div className="row">
      <div className="col-sm-12 col-lg-9">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
            <AdvancedCard
              title="Completed assist"
              theme={{ background: colorScheme.faintPrimary, color: colorScheme.primary }}
              icon={<i className="fi fi-rr-ambulance"></i>}
              total={10}
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <AdvancedCard
              title="Total commission"
              theme={{ background: colorScheme.faintSuccess, color: colorScheme.success }}
              icon={<Cash size={23.5} style={{ marginLeft: '8.6px', marginTop: '9px' }} />}
              total="$100"
            />
          </div>
          <div className="col-sm-12 col-lg-4">
            <AdvancedCard
              title="Total revenue"
              theme={{ background: colorScheme.faintOrange, color: colorScheme.orange }}
              icon={<i className="fi fi-rr-stats"></i>}
              total="$100"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Card className="assist-request-card">
              <CustomText type="span" size={16}>
                Assist request(10)
              </CustomText>

              <Height val={15} />
              <hr style={customHrStyle} />
              <Height val={19} />
              <div className="row assist-request">
                <div className="col-lg-3">
                  <PullUp val={86} />
                  <PieChartDraw />
                  <PullUp val={10} />
                </div>
                <div className="col-sm-1 col-lg-1 stat">
                  <AssistRequestStat title="Active" total={30} color={colorScheme.faintPrimary4} />
                </div>
                <div className="col-sm-1 col-lg-1 stat">
                  <AssistRequestStat title="Active" total={30} />
                </div>
                <div className="col-sm-1 col-lg-1 stat">
                  <AssistRequestStat title="Active" total={30} color={colorScheme.faintOrange2} />
                </div>
                <div className="col-sm-1 col-lg-1 stat">
                  <AssistRequestStat title="Active" total={30} color={colorScheme.faintDanger3} />
                </div>
                <div className="col-sm-1 col-lg-1 stat">
                  <AssistRequestStat title="Active" total={30} color={colorScheme.faintSuccess2} />
                </div>
              </div>
              <Height val={15} />
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Card>
              <CustomText type="span" size={17}>
                Total assist
              </CustomText>

              <Height val={15} />
              <hr style={customHrStyle} />
              <Height val={19} />
              <LineChartDraw />
            </Card>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-3 paddingNoneLg">
        <div className="row">
          <div className="col-12 paddingNoneLg">
            <AdvancedCard
              title="Online  drivers"
              theme={{ background: colorScheme.faintPrimary3, color: colorScheme.darkPrimary2 }}
              icon={<i className="fi fi-rr-school-bus"></i>}
              total="$100"
            />
            <Height val={1} />
            <Card className="cancelled-assists">
              <div className="card-title">Cancelled assists</div>
              <hr className="title-underline" style={{ height: '2px' }} />
              <Height val={12} />
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-12 paddingNone">
                      <h1>30</h1>
                      <CustomText type="span" size={11.5}>
                        By driver
                      </CustomText>
                    </div>
                  </div>
                  <Height val={21} />
                  <div className="row">
                    <div className="col-12 paddingNone">
                      <h1>30</h1>
                      <CustomText type="span" size={11.5}>
                        By admin
                      </CustomText>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <h1>30</h1>
                  <CustomText type="span" size={11.5}>
                    By customer
                  </CustomText>
                </div>
              </div>
              <Height val={14} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advanced;
