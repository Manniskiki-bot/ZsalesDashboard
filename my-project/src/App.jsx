import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import Invoice from './Components/Dashboard/Invoice';
import { data } from './Components/Dashboard/invoicedata';
import Calendar from './Components/Pages/Calendar';

import School from './Components/Pages/School/School';
import SchoolOne from './Components/Pages/School/SchoolOne';
import Invoiceform from './Components/Pages/School/Invoiceform';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        
        
        <Route path="/school" element={<School />} />
        <Route path='/school/details' element={<SchoolOne />} />
        <Route path='/add-invoice' element={<Invoiceform />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
};

export default App;



