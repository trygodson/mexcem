import React, { useEffect, useState } from 'react';
import BasicCard from '../../../../shared/components/card/basiccard/basiccard';
import { colorScheme } from '../../../../default';
import NewTable from '../../../../shared/components/newTable/newtable';
import { CustomerDashboard } from '../../../../shared/hooks/api/testService';

function Basic() {
  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);

  useEffect(async () => {
    const data = await CustomerDashboard();
    setTableData(data.data);
    setLoading(false);
  }, [tabledata]);

  const vehiclesDecorator = [
    {
      label: 'Date and Time',
      accessor: 'date',
      Cell: props => <div style={{ paddingLeft: '10px' }}>{props}</div>,
    },
    {
      label: 'Assist',
      accessor: 'assist',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Payment',
      accessor: 'payment',
      Cell: props => <>{props}</>,
    },
    {
      label: 'Status',
      accessor: 'status',
      Cell: props => (
        <span
          className="success_span_text"
          style={{ padding: '4px 8px', fontSize: 14 }}
        >
          {props}
        </span>
      ),
    },

    {
      label: 'Total',
      accessor: 'total',
      Cell: props => <>{`$${props}`}</>,
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-lg-4">
          <BasicCard
            title="Drivers"
            icon={<i className="fi fi-rr-school-bus"></i>}
            theme={{
              background: colorScheme.faintPrimary3,
              color: colorScheme.darkPrimary2,
            }}
            total={60}
            data1={{ title: 'New', value: 30 }}
            data2={{ title: 'Active', value: 30 }}
            data3={{ title: 'Inactive', value: 30 }}
          />
        </div>
        <div className="col-sm-12 col-lg-4">
          <BasicCard
            title="Customers"
            icon={<i className="fi fi-rr-users"></i>}
            theme={{
              background: colorScheme.faintPrimary,
              color: colorScheme.primary,
            }}
            total={60}
            data1={{ title: 'New', value: 30 }}
            data2={{ title: 'Active', value: 30 }}
            data3={{ title: 'Inactive', value: 30 }}
          />
        </div>
        <div className="col-sm-12 col-lg-4">
          <BasicCard
            title="Blocked/Suspended Users"
            icon={<i className="fi fi-rr-ban"></i>}
            theme={{
              background: colorScheme.faintDanger2,
              color: colorScheme.danger,
            }}
            total={60}
            data1={{ title: 'Driver', value: 30 }}
            data2={{ title: 'Customer', value: 30 }}
            data3={{ title: 'Admin', value: 30 }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 paddingNone">
          <div>
            <span style={{ fontWeight: 'bold' }}>Recent assist</span>
          </div>
          <div className="mtop-2">
            <NewTable
              decorator={vehiclesDecorator}
              tableData={tabledata}
              isloading={loading}
              addcheckbox={false}
              pagination={false}
            />
            <div className="dflex jce">
              <div
                className="primary_span_text"
                style={{
                  padding: '8px 25px',
                  fontWeight: '500',
                  fontSize: '12px',
                }}
              >
                See All
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Basic;
