import { Chart } from "react-google-charts";

const LineChart = () => {
  const data = [
    ["Week", "Sales", "Expenses"],
    ["Week 1", 1000, 400],
    ["Week 2", 1170, 460],
    ["Week 3", 660, 1120],
    ["Week 4", 1030, 540],
  ];

  const chartOptions = {
    width: "100%", // Set width to "100%" to utilize the full width
    height: 250,
    chartArea: {
      width: "90%",
    },
    legend: {
      position: "none", 
    },
    hAxis: {
      title: "", 
    },
  };

  const options = {
    curveType: "function",
  };

  return (
    <Chart
      chartType="LineChart"
      width={chartOptions.width}
      height={chartOptions.height}
      data={data}
      options={Object.assign(options, chartOptions)} // Merge options and chartOptions
    />
  );
};

export default LineChart;
