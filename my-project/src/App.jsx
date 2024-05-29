import React from 'react'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import PieChartComponent from './Components/Dashboard/PieChartComponent'
import Invoice from './Components/Dashboard/Invoice'

const App = () => {
  return (
    <>
      <Navbar />
      <Dashboard />
      <Invoice />
    </>
  )
}

export default App
