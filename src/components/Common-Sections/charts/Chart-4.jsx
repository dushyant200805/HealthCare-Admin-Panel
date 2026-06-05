import Chart from "react-apexcharts";

function ChartUI4() {
  const series = [
    {
      name: "Last Month",
      data: [4, 30, 15, 20, 45, 40, 60],
      color: "#fbbf24",
    },
    {
      name: "This Month",
      data: [5, 20, 25, 30, 10, 30, 50],
      color: "#e0a800ff",
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
      fontFamily: "Plus Jakarta Sans, sans-serif",

      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",

      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },

    grid: {
      borderColor: "#e5e7eb",

      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",

      categories: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ],

      labels: {
        style: {
          colors: "#6b7280",
          fontSize: "13px",
        },
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: "#6b7280",
          fontSize: "13px",
        },
      },
    },

    tooltip: {
      theme: "light",
    },

    legend: {
      position: "bottom",
      horizontalAlign: "center",

      fontSize: "14px",
      fontWeight: 700,

      itemMargin: {
        horizontal: 12,
        vertical: 0,
      },

      labels: {
        colors: "#374151",
      },

      markers: {
        width: 12,
        height: 12,
        radius: 12,
      },
    },
  };

  return (
    <div className="rounded h-100" id="totalaccident">
      <Chart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default ChartUI4;