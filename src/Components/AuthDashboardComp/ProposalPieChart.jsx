import React from "react";
import Chart from 'react-google-charts'
const ProposalPieChart = ({className}) => {
  return (
    <div>
      <Chart
        // width={"300px"}
        // height={"300px"}
        className={className}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7],
        ]}
        options={{
        //   title: "My Daily Activities",
          // Just add this option
          pieHole: 0.3,
          backgroundColor:'#f4f5f9'
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
};

export default ProposalPieChart;
