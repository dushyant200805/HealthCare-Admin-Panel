import Chart from "react-apexcharts";

function ChartUI3() {
  const series = [
    {
      name: "Last Month",
      data: [20, 15, 10, 30, 42, 75, 80],
      color: "#b91c1c",
    },
    {
      name: "This Month",
      data: [11, 32, 40, 50, 70, 70, 50],
      color: "#dc2626",
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
        opacityFrom: 0.35,
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
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

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

      offsetX: 0,
      offsetY: 8,

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
    <div className="rounded h-100" id="totaldeath">
      <Chart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default ChartUI3;