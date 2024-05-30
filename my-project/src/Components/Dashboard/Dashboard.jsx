import React from 'react';
import { MdArrowOutward, MdOutlineArrowUpward } from "react-icons/md";
import Navbar from '../Navbar';
import Invoice from './Invoice';
import { data } from './invoicedata';
import PieChartComponent from './PieChartComponent';
import BarChartComponent from './BarChartComponent';

const Dashboard = () => {
  const labels = ['Primary', 'Secondary', 'IGCSE'];

  const analyticsData = {
    labels: labels,
    datasets: [{
      label: 'Zeraki Analytics',
      data: [65, 59, 80], // Example data
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 1
    }]
  };

  const financeData = {
    labels: labels,
    datasets: [{
      label: 'Zeraki Finance',
      data: [45, 72, 54], // Example data
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  const timetableData = {
    labels: labels,
    datasets: [{
      label: 'Zeraki Timetable',
      data: [30, 50, 60], // Example data
      backgroundColor: [
        'rgba(255, 205, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(255, 205, 86)',
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <>
      <section className='ml-[200px] pl-10 flex flex-col gap-12 mt-10 mr-8 justify-between pt-10 sm:flex-row   '>
        <div>
          <div className="welcome bg-lightblue w-[600px] pt-8 pb-8 pl-6 pr-7 rounded-md ">
            <div className='flex items-center mb-7 gap-6 font-semibold text-xs sm:text-xl '>
              <img src="./Images/user-1.jpg" alt="User" width={35} className='rounded-full'/>
              <h2>Welcome back Tom Lee!</h2>
            </div>
            <div className='flex gap-11'>
              <div className="sales">
                <h1 className='flex items-center gap-2 text-xs sm:text-3xl font-semibold'>Ksh40,000 <span className='text-green text-sm'><MdArrowOutward /></span></h1>
                <h2 className='text-xs sm:text-sm font-normal'>Today's Sales</h2>
              </div>
              <div className="performance">
                <h1 className='flex items-center gap-2 text-xs sm:text-3xl font-semibold'>35% <span className='text-green text-sm'><MdArrowOutward /></span></h1>
                <h2 className='text-xs sm:text-sm font-normal'>Performance</h2>
              </div>
            </div>
          </div>

          <div className='bg-bgwhite pt-6 pl-8 pb-8 mt-6 pr-3 rounded-md shadow-glow'>
            <div className='flex items-center justify-between'>
              <div> 
                <h1 className='font-medium text-lg'>Product Sign Ups</h1>
                <span className='text-sm text-grey'>Monthly Updates</span>
              </div>
              <div>
                <select className='border border-eye rounded-md text-sm px-2 py-1 text-grey font-medium'>
                  <option value="">This Month</option>
                  <option value="">June</option>
                  <option value="" className='not-available'>July</option>
                  <option value="">August</option>
                </select>
              </div>
            </div>
            <div className='flex gap-6 mt-6'>
              <PieChartComponent />
              <PieChartComponent />
              <PieChartComponent />
            </div>
          </div>

          <div className='bg-bgwhite pt-6 pl-8 pb-8 mt-6 pr-3 rounded-md shadow-glow'>
            <div className='flex items-center justify-between'>
              <div> 
                <h1 className='font-medium text-lg'>School Sign Ups</h1>
                <span className='text-sm text-grey'>Monthly Updates</span>
              </div>
              <div>
                <select className='border border-eye rounded-md text-sm px-2 py-1 text-grey font-medium'>
                  <option value="">This Month</option>
                  <option value="">June</option>
                  <option value="" className='not-available'>July</option>
                  <option value="">August</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col gap-6 mt-6'>
              <BarChartComponent data={analyticsData} title="Zeraki Analytics Sign-ups" />
              <BarChartComponent data={financeData} title="Zeraki Finance Sign-ups" />
              <BarChartComponent data={timetableData} title="Zeraki Timetable Sign-ups" />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-3'>
          <div className='grid grid-cols-2 gap-7 h-[50px]'>
            <div className='shadow-glow pt-7 pb-7 pr-20 pl-5 rounded-md'>
              <h2 className='text-sm'>Total Collections</h2>
              <p className='text-3xl mt-3 mb-3'>20</p>
              <p className='flex items-center text-xs'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
            </div>
            <div className='shadow-glow pt-7 pb-7 pr-20 pl-5 rounded-md'>
              <h2 className='text-sm'>Bounced Cheques</h2>
              <p className='text-3xl mt-3 mb-3'>3</p>
            </div>
          </div>

          <div className='shadow-glow pt-7 pr-10 pl-5 pb-9 rounded-md    text-center' >
            <h2 className='text-sm'>Total Revenue</h2>
            <p className='mt-3 mb-4 text-3xl'>Ksh1,000,000</p>
            <div className="flex flex-col justify-space gap-4">
              <div className="text-sm  pr-2">
                <p className='text-xs'>Zeraki Analytics:</p>
                <p className="font-semibold mt-1">Ksh300,000</p>
                <p className='flex  text-xs mt-2 ml-[120px]'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
              </div>
              <div className="text-sm  pr-2 pl-2">
                <p className='text-xs'>Zeraki Finance:</p>
                <p className="font-semibold mt-1">Ksh500,000</p>
                <p className='flex items-center text-xs mt-2 ml-[120px]'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
              </div>
              <div className="text-sm pl-2">
                <p className='text-xs'>Zeraki Timetable:</p>
                <p className="font-semibold mt-1">Ksh200,000</p>
                <p className='flex items-center text-xs mt-2 ml-[120px]'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
              </div>
            </div>
          </div>

          <div className='shadow-glow pt-7 pr-10 pl-5 pb-7 rounded-md h-[250px] '>
            <h2 className='text-xs'>Total Sign-ups</h2>
            <p className='mt-3 mb-4 text-3xl'>30</p>
            <div className="flex justify-space gap-4">
              <div className="text-sm border-r border-gray-300 pr-2">
                <p className='text-xs'>Zeraki Analytics:</p>
                <p className="font-semibold mt-1 ml-8">10</p>
                <p className='flex items-center text-xs mt-2 ml-4'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
              </div>
              <div className="text-sm border-r border-gray-300 pr-2 pl-2">
                <p className='text-xs'>Zeraki Finance:</p>
                <p className="font-semibold mt-1 ml-8">15</p>
                <p className='flex items-center text-xs mt-2 ml-4'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
              </div>
              <div className="text-sm pl-2">
                <p className='text-xs'>Zeraki Timetable:</p>
                <p className="font-semibold mt-1 ml-8">5</p>
                <p className='flex items-center text-xs mt-2 ml-4'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Invoice rows={data} />
    </>
  )
}

export default Dashboard;
