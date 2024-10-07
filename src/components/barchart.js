import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Barchart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the existing chart before re-rendering
    }

    const myChartRef = chartRef.current.getContext('2d');

    // Create chart instance
    chartInstance.current = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['Temperature', 'Humidity', 'Windspeed', 'RainyLevel', 'SunnyLevel'], // X-axis labels
        datasets: [
          {
            label: "Bar Chart",
            data: [65, 59, 80, 81, 56], // Chart data (removed extra values)
            backgroundColor: [
              'rgba(255, 21, 0, 0.6)', // Removed extra space here
              'rgba(0, 213, 255, 0.6)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgb(255, 21, 0)',
              'rgb(0, 213, 255)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
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

    // Cleanup function to destroy chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this runs once after mount

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg"> {/* Outer container */}
      <div className="chart-container" style={{ height: '400px', width: '100%' }}> {/* Chart container */}
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
