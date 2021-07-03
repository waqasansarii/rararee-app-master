import React from "react";
import { Bar } from "react-chartjs-2";


const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

const StatusBarChart = ({data,className}) => {
  return (
    <div>
      <div>
        <Bar style={{ fontSize: "15px" }} options={options}  className={className} data={data} />
      </div>
    </div>
  );
};

export default StatusBarChart;
