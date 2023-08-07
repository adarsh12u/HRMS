import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2019-2023",
  },
};

const  Charts  = ()=> {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default Charts;