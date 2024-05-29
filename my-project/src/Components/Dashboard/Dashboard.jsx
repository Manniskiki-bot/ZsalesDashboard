import React from 'react'
import { MdArrowOutward, MdOutlineArrowUpward } from "react-icons/md";

const Dashboard = () => {
  return (
    <section className='ml-8 flex gap-12 mt-10 mr-8 justify-between'>
    <div>
        <div className="welcome bg-blue w-[720px] pt-8 pb-8 pl-6 pr-7 text-white rounded-md">
            <div className='flex items-center mb-7 gap-6 font-semibold text-xl'>
               <img src="./Images/user-1.jpg" alt="" width={35} className='rounded-full'/>
               <h2 >Welcome back Tom Lee!</h2>
            </div>
            <div className='flex gap-11'>
                <div className="sales">
                    <h1 className='flex items-center gap-2 text-3xl font-semibold'>Ksh40,000 <span className='text-green text-sm'><MdArrowOutward /></span></h1>
                    <h2 lassName='text-sm font-normal'>Today's Sales</h2>
                </div>
                <div className="performance">
                    <h1 className='flex items-center gap-2 text-3xl font-semibold'>35% <span className='text-green text-sm'><MdArrowOutward /></span></h1>
                    <h2 className='text-sm font-normal'>Performance</h2>
                </div>
            </div>
        </div>
    </div>
        <div className='grid grid-cols-1 gap-7 text-white'>
            {/* Collections Card */}
        <div className='grid grid-cols-2 gap-7'>
            <div className='border border-white border-solid pt-7 pb-7 pr-20 pl-5 rounded-md'>
                <h2 className='text-xs'>Total Collections</h2>
                <p className='text-3xl mt-3 mb-3'>20</p>
                <p className='flex items-center text-xs'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
            </div>
            {/* Collections Card */}
            <div className='border border-white border-solid pt-7 pb-7 pr-20 pl-5 rounded-md'>
                <h2 className='text-xs'>Bounced Cheques</h2>
                <p className='text-3xl mt-3 mb-3'>3</p>
            </div>
        </div>
            {/* Collections Card */}
            <div className='border border-white border-solid pt-7 pr-10 pl-5 pb-7 rounded-md'>
                <h2 className='text-xs'>Total Revenue</h2>
                <p className='mt-3 mb-4 text-3xl'>Ksh1,000,000</p>
                <div className="flex justify-space gap-4">
            <div className="text-sm border-r border-gray-300 pr-2">
              <p className='text-xs'>Zeraki Analytics:</p>
              <p className="font-semibold mt-1">Ksh300,000</p>
              <p className='flex items-center text-xs mt-2 ml-4'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
            </div>
            <div className="text-sm border-r border-gray-300 pr-2 pl-2">
              <p className='text-xs'>Zeraki Finance:</p>
              <p className="font-semibold mt-1">Ksh500,000</p>
              <p className='flex items-center text-xs mt-2 ml-4'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
            </div>
            <div className="text-sm pl-2">
              <p className='text-xs'>Zeraki Timetable:</p>
              <p className="font-semibold mt-1">Ksh200,000</p>
              <p className='flex items-center text-xs mt-2 ml-4'><span className='text-green text-xs'><MdOutlineArrowUpward /></span>3.5%</p>
            </div>
          </div>
            </div>
            {/* Collections Card */}
            <div className='border border-whiteb border-solid pt-7 pr-10 pl-5 pb-7 rounded-md'>
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
  )
}

export default Dashboard