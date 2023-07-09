import { Chart } from "react-google-charts";

const PieChart = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Basic Tees", 11],
    ["Custom Short Pants", 2],
    ["Super Hoodies", 2]
  
  ];

  const options = {
    title: null,
    legend: "none", // Hide the legend
    pieSliceText: "none", // Hide the text on pie slices
    pieSliceTextStyle: {
      color: "black",
      fontSize: 12,
    },
  };

  // Define a custom palette of colors
  const colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6"];

  const totalHours = data.slice(1).reduce((sum, row) => sum + row[1], 0); // Calculate the total hours

  return (
    <div style={{ display: "flex" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"70%"}
        height={"250px"}
      />
      <div style={{ width: "88%", paddingLeft: "0", paddingTop: "5%", fontWeight: "500", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
        {data.slice(1).map((row, index) => {
          const percentage = ((row[1] / totalHours) * 100).toFixed(2); // Calculate the percentage

          return (
            <div key={row[0]} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: colors[index],
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></div>
              <div>{row[0]}</div>
              <div style={{ marginLeft: "0" }}> = {percentage}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChart;
