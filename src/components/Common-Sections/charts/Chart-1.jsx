
import Chart from "react-apexcharts";
function ChartUI1() {
 

  // Chart Series
  const series = [
    {
      name: "Neurology",
      data: [44, 55, 41, 67, 22, 43, 21, 10, 20, 5, 20, 10],
      color: "#4B49AC",
    },
    {
      name: "Dental Care",
      data: [13, 23, 20, 8, 13, 27, 33, 12, 40, 20, 10, 25],
      color: "#839CFA",
    },
    {
      name: "Gynocology",
      data: [11, 17, 15, 15, 21, 14, 15, 13, 40, 35, 15, 25],
      color: "#6C6CD9",
    },
    {
      name: "Orthopedic",
      data: [44, 55, 41, 67, 22, 43, 21, 49, 40, 15, 25, 25],
      color: "#40349E",
    },
  ];

  // Chart Options
  const options = {
    chart: {
      id: "patbydepartment",
      type: "bar",
      stacked: true,
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "33px",
        borderRadius: 2,
      },
    },

    dataLabels: {
      enabled: false,
    },

    responsive: [
      {
        breakpoint: 650,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
            itemMargin: {
              horizontal: 5,
              vertical: 5,
            },
          },

          plotOptions: {
            bar: {
              columnWidth: "15px",
            },
          },
        },
      },
    ],

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    fill: {
      opacity: 1,
    },

    legend: {
      position: "top",
      offsetX: "right",
      fontWeight: 500,
      fontSize: "13px",

      itemMargin: {
        horizontal: 20,
        vertical: 0,
      },

      markers: {
        width: 25,
        height: 10,
        radius: 2,
      },

      labels: {
        colors: "#676565",
      },
    },
  };

  return (
    <div id="patbydepartment">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default ChartUI1;