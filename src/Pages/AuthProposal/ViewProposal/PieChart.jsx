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
        width={180}
        height={200}
        innerRadius={0.85}
        emptyOffset={1.5}
        toggledOffset={0}
        selectedOffset={0}
        strokeColor={"transparent"}
        colors={["#19C2A0", "#ED9F10", "black"]}
        legend={false}
        style={{ margin: "0px auto" }}
        className="custom_donut_chart"
      />
    </div>
  );
};

export default PieChart;
