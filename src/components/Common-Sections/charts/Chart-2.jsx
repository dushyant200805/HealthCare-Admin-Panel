import Chart from "react-apexcharts";

function ChartUI2() {
  const series = [75, 65, 85, 60];

  const options = {
    chart: {
      height: 350,
      type: "radialBar",
      fontFamily: "Plus Jakarta",
    },

    colors: ["#FF4D73", "#FDB515", "#11D68B", "#0B84F3"],

    plotOptions: {
      radialBar: {
      dataLabels: {
        name: {
          fontSize: '20px',
        },
        value: {
          fontSize: '24px',
          fontWeight:700,
          color: '#0E0E23'
        },
        total: {
          show: true,
          label: 'Total',
          color: '#0E0E23',
          fontSize: '14px',
          fontWeight:700,
        }
      }
    }
    },

    stroke: {
      lineCap: "butt",
    },

    fill: {
      opacity: 1,
    },

    labels: ["Neurology", "Skin Care", "Dental", "Orthopedic"],

    
  };

  return (
    <div id="overallprogress">
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={350}
      />
    </div>
  );
}

export default ChartUI2;