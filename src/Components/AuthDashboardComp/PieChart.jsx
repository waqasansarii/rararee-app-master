import React from "react";
import DonutChart from "react-donut-chart";

const PieChart = () => {
  return (
    <div>
      <DonutChart
        data={[
          {
            label: "Give you up",
            value: 25,
          },
          {
            label: "",
            value: 75,
          },
          
        ]}
        width={310}
        height={200}
      />
    </div>
  );
};

export default PieChart;
