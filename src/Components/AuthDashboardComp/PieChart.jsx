import React from "react";
import DonutChart from "react-donut-chart";

const PieChart = ({className}) => {
  return (
    <div>
      <DonutChart
        data={[
          {
            label: "Give you up",
            value: 25,
          },
          {
            label: "Give you up 2",
            value: 25,
          },
          {
            label: "",
            value: 75,
          },
          
        ]}
        // width={100}
        // height={200}
        innerRadius={0.5}
        emptyOffset={1.5}
        toggledOffset={0}
        selectedOffset={0}
        strokeColor={"transparent"}
        colors={["#19C2A0", "#ED9F10", "#5371FF"]}
        // legend={false}
        // style={{ margin: "0px auto" }}
        className={className}
      />
    </div>
  );
};

export default PieChart;
