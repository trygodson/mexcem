import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const dataDriver = [
  {
    name: 'mon',
    uv: 7,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Tue',
    uv: 9,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Wed',
    uv: 20,
    pv: 33,
    amt: 29,
  },
  {
    name: 'Thur',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: 'Fri',
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: 'Sat',
    uv: 10,
    pv: 38,
    amt: 25,
  },
  {
    name: 'Sun',
    uv: 34,
    pv: 43,
    amt: 21,
  },
];

function LineChartDraw({ ...props }) {
  return (
    <ResponsiveContainer width="100%" height={props.height || 200}>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

function LineChartDrawDriver({ ...props }) {
  return (
    <ResponsiveContainer width="100%" height={props.height || 200}>
      <LineChart
        // width={500}
        // height={200}
        data={dataDriver}
        syncId="anyId"
        margin={{
          top: 0,
          right: 0,
          left: -30,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#000000" fill="#000000" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export { LineChartDrawDriver };

export default LineChartDraw;
