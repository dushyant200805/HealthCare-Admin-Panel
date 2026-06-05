import Chart from "react-apexcharts";

function ChartUI5() {
  const series = [85, 65.5, 70, 75, 80];

  const options = {
    chart: {
      height: 320,
      type: "polarArea",
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },

    labels: [
      "Neurology",
      "Dental Care",
      "Gynocology",
      "Orthopedic",
      "Skin Care",
    ],

  colors: [
  "rgb(0, 143, 251)",
  "rgb(0, 227, 150)",
  "rgb(254, 176, 25)",
  "rgb(255, 69, 96)",
  "rgb(119, 93, 208)",
],

    fill: {
      opacity: 1,
    },

    stroke: {
      width: 0,
    },

    yaxis: {
      show: false,
    },

    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },

        spokes: {
          strokeWidth: 0,
        },
      },
    },

    legend: {
      position: "bottom",
      horizontalAlign: "left",

      fontSize: "13px",
      fontWeight: 500,

      labels: {
        colors: "#676565",
      },

      itemMargin: {
        horizontal: 8,
        vertical: 6,
      },

      markers: {
        width: 18,
        height: 10,
        radius: 2,
      },
    },

    tooltip: {
      theme: "light",
    },
  };

  return (
    <div id="earningchart">
      <Chart
        options={options}
        series={series}
        type="polarArea"
        height={320}
      />
    </div>
  );
}

export default ChartUI5;