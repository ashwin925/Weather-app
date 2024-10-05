import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Linechart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the existing chart before re-rendering
    }

    const myChartRef = chartRef.current.getContext('2d');

    // Create chart instance
    chartInstance.current = new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Temperature', 'Humidity', 'Windspeed', 'RainyLevel', 'SunnyLevel'], // X-axis labels
        datasets: [
          {
            label: "Line Chart",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Let the container control size
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg"> {/* Outer container */}
      <div className="chart-container" style={{ height: '400px', width: '100%' }}> {/* Chart container */}
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
