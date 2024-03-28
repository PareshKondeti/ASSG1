
import React, { useState } from 'react';
import {
   BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';
import { GrCurrency } from "react-icons/gr";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside id="sidebar" className={isOpen ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <GrCurrency className ='icon_header' /> 
        </div>
        <span className='icon close_icon' onClick={toggleSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon' /> Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon' /> Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
