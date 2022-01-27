import React from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  let dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalmaxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
