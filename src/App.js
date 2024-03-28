import  {  ResponsiveContainer }  from 'recharts';
import BarChart from "./BarChart";
import './App.css'
import { useState } from 'react'
import Header from './Header'
import Cards from './Cards';
import Sidebar from './Sidebar'



export default function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    return (
    <div>    
        <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        
        <main className='main-container'>
        <div className='main-title'>
            <h3>PIONEER LAB DASHBOARD</h3>
        </div>

        <Cards/>
        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart />
        </ResponsiveContainer>
        
        </div>
        </main>  
        </div>
    </div> 
    );
  }
  