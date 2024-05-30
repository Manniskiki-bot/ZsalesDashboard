import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChartComponent = ({ data, title }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      },
      legend: {
        display: true,
        position: 'top'
      }
    }
    
  };

  // Ensure that data is defined and has the necessary properties
  const chartData = data || {
    labels: [],
    datasets: []
  };

  return (
    <div className='w-[300px] mb-6'>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChartComponent;
