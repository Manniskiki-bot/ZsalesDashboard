import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaSchool, FaTasks, FaComments, FaCog, FaUserPlus, FaSignInAlt } from 'react-icons/fa'; // Add other icons as needed
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false); // State to manage sidebar open/close

  // Mapping icon names to the actual imported icons
  const iconMap = {
    'FaHome': FaHome,
    'FaCalendarAlt': FaCalendarAlt,
    'FaSchool': FaSchool,
    'FaTasks': FaTasks,
    'FaComments': FaComments,
    'FaCog': FaCog,
    'FaUserPlus': FaUserPlus,
    'FaSignInAlt': FaSignInAlt,
  };

  const Menus = [
    {
      title: 'Dashboard',
      path: '/',
      icon: 'FaHome'
    },
    {
      title: 'Schools',
      path: '/school',
      icon: 'FaSchool'
    },
    {
      title: 'Calendar',
      path: '/calendar',
      icon: 'FaCalendarAlt',
      gap: true
    },
    {
      title: 'Kanban',
      path: '/',
      icon: 'FaTasks'
    },
    {
      title: 'Chat',
      path: '/',
      icon: 'FaComments'
    },
    {
      title: 'Settings',
      path: '/',
      icon: 'FaCog',
      gap: true
    },
    {
      title: 'Register',
      path: '/',
      icon: 'FaUserPlus'
    },
    {
      title: 'Login',
      path: '/',
      icon: 'FaSignInAlt'
    }
  ];

  return (
    <section className='bg-bgwhite shadow-glow h-screen w-[150px]  lg:w-[200px] '>
      <div>
        <div className="lo ml-16">Logo</div>
        <ul className='pt-6 pr-4 pl-4'>
          {Menus.map((menu, index) => {
            const IconComponent = iconMap[menu.icon];
            return (
              <li 
                key={index} 
                className={`hover:bg-lightblue flex items-center text-sm p-2 rounded-md gap-x-4 cursor-pointer ${menu.gap ? "mt-9" : 'mt-2'}`}
              >
                {IconComponent && <IconComponent />}
                <Link to={menu.path}>
                  <span >{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      
    </section>
  );
};

export default Sidebar;

