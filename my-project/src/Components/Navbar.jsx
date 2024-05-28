import React from 'react'
import { FaBars } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { TbMessageChatbot } from "react-icons/tb";
import { RiApps2AddLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <section className='flex justify-between ml-8 mr-8 mt-3'>
       <div className='flex items-center gap-6'>
        <a href="/"><FaBars /></a>
        <a href="/">Chat</a>
        <a href="/">Calendar</a>
        <a href="/">Email</a>
       </div>
       <div className='flex items-center gap-6'>
        <form action="/">
            <input type="search" placeholder='Try to search...'/>
        </form>
        <a href="/"><CiLight /></a>
        <a href="/"><TbMessageChatbot /></a>
        <a href="/"><RiApps2AddLine /></a>
        <div className="profile flex items-center">
            <img src="" alt="Pic" />
            <div>
                <h3>Tom Lee</h3>
                <p>Sales Agent</p>
            </div>
        </div>
       </div>

    </section>
  )
}

export default Navbar