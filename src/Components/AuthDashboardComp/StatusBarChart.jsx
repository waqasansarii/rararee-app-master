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
  plugins: {
    legend: {
      position: "none",
    }
  }
};

const options2 = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      // borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "none",
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Horizontal Bar Chart',
    // },
  },
};

const StatusBarChart = ({ data, className, doOption }) => {
  return (
    <div>
      <div>
        <Bar
          style={{ fontSize: "15px" }}
          options={doOption ? options2 : options}
          className={className}
          data={data}
        />
      </div>
    </div>
  );
};

export default StatusBarChart;
