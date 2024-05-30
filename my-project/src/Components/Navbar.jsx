import React from 'react'
import { FaBars } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { TbMessageChatbot } from "react-icons/tb";
import { RiApps2AddLine } from "react-icons/ri";
import Dashboard from './Dashboard/Dashboard';
import Invoice from './Dashboard/Invoice';
import { data } from './Dashboard/invoicedata';

import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <section className='flex'>
      <div className='fixed '><Sidebar /></div>
      
      <div className='flex gap-[200px] ml-[250px] mr-8 mt-2  '>
       <div className='flex items-center gap-6'>
       <button><FaBars /></button>
        <a href="/">Chat</a>
        <a href="/">Calendar</a>
        <a href="/">Email</a>
       </div>
       <div className='flex items-center gap-6'>
        <form action="/">
            <input type="search" placeholder='Try to search...' className='rounded-md py-2 px-5 border border-eye'/>
        </form>
        <a href="/" className='text-xl'><CiLight /></a>
        <a href="/" className='text-xl'><TbMessageChatbot /></a>
        <a href="/" className='text-xl'><RiApps2AddLine /></a>
        <div className="profile flex items-center gap-2">
            <img src="./Images/user-1.jpg" alt="Pic" width={35} className='rounded-full'/>
            <div className='text-sm font-medium'>
                <h3 >Tom Lee</h3>
                <p className='text-grey'>Sales Agent</p>
            </div>
        </div>
       </div>

    </div>
   
    </section>
  )
  }

export default Navbar