import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Polarchart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the existing chart before re-rendering
    }

    const myChartRef = chartRef.current.getContext('2d');

    // Create chart instance
    chartInstance.current = new Chart(myChartRef, {
      type: 'polarArea',
      data: {
        labels: [
          'Red',
          'Green',
          'Yellow',
          'Grey',
          'Blue'
        ], // X-axis labels
        datasets: [
          {
            label: "polarArea",
            data: [11, 16, 7, 3, 14], // Chart data
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ],
            borderWidth: 1, // Border width of bars
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
