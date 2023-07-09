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
      width: "90%", // Adjust the width as needed
    },
    legend: {
      position: "none", // Hide the legend
    },
    hAxis: {
      title: "", // Add a title for the X-axis
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

// import { useEffect, useState } from 'react';
// import { Chart } from "react-google-charts";

// const LineChart = () => {
//   const [data, setData] = useState([["Week", "Sales", "Expenses"]]); // Initialize with column names



//   useEffect(() => {
//     const fetchTaxData = async () => {
//       try {
//         const myHeaders = new Headers();
//         myHeaders.append("apikey", "X5JLpYTMPNhWjIbwExQ5JWDYnO2Oi2B2");

//         const requestOptions = {
//           method: 'GET',
//           headers: myHeaders,
//           redirect: 'follow'
//         };

//         const response = await fetch("https://api.apilayer.com/tax_data/us_rate_list?state=state", requestOptions);
//         const result = await response.json();

//           // Assuming the API returns an array of objects with week, sales, and expenses properties
//           const fetchedData = result.map(item => [item.week, item.sales, item.expenses]);

//           setData(prevData => [...prevData, ...fetchedData]);
//       } catch (error) {
//         console.error('Error fetching tax data:', error);
//       }
//     };

//     fetchTaxData();
//   }, []);

//   const chartOptions = {
//     width: "100%",
//     height: 250,
//     chartArea: {
//       width: "90%",
//     },
//     legend: {
//       position: "none",
//     },
//     hAxis: {
//       title: "",
//     },
//   };

//   const options = {
//     curveType: "function",
//   };

//   return (
//     <Chart
//       chartType="LineChart"
//       width={chartOptions.width}
//       height={chartOptions.height}
//       data={data}
//       options={Object.assign(options, chartOptions)}
//     />
//   );
// };

// export default LineChart;
