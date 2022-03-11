import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { gridBreakpoints } from '../../../default';
// import { useMediaQuery } from 'react-responsive';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const onPieEnter = () => {};

function PieChartDraw() {
  // const isLargeScreen = useMediaQuery({ query: `(min-width: ${gridBreakpoints.lg})` });

  return (
    <PieChart width={500} height={200} onMouseEnter={onPieEnter}>
      <Pie
        data={data}
        cx={60}
        cy={140}
        innerRadius={25}
        outerRadius={45}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default PieChartDraw;
