import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChartComponent = () => {

  const data ={
    datasets: [
      {
        label: 'Target',
        data: [80, 20],
        backgroundColor: ['#253662', '#5D87FF'],
        hoverOffset: 4
      }
    ]
  }

  const options = {

  }

  return (
    <>
    
    <div className='w-[150px]'>
    
      <Doughnut data={data} options={options}className='w[200px]'/>
  
    </div>
    </>
  )
}

export default PieChartComponent